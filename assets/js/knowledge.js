document.addEventListener('DOMContentLoaded', function() {
    // 获取 DOM 元素
    const categoryListElement = document.getElementById('category-list');
    const titleElement = document.getElementById('knowledge-title');
    const categoryElement = document.getElementById('knowledge-category');
    const questionElement = document.getElementById('knowledge-question');
    const answerElement = document.getElementById('knowledge-answer');
    const answerContainer = document.getElementById('answer-container');
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const searchResults = document.getElementById('search-results');
    
    let currentKnowledge = null;
    let allKnowledge = [];

    // 加载所有知识点数据
    async function loadKnowledgeData() {
        try {
            // 定义所有分类
            const categories = ['javascript', 'react', 'algorithms'];
            let allItems = [];
            
            // 加载每个分类的数据
            for (const category of categories) {
                try {
                    const response = await fetch(`/data/knowledge/${category}.json`);
                    const data = await response.json();
                    // 为每个知识点添加分类信息
                    const items = data.items.map(item => ({
                        ...item,
                        category: data.category
                    }));
                    allItems = allItems.concat(items);
                } catch (error) {
                    console.error(`加载 ${category} 分类数据失败:`, error);
                }
            }
            
            allKnowledge = allItems;
            return allKnowledge;
        } catch (error) {
            console.error('加载知识点数据失败:', error);
            return [];
        }
    }

    // 获取 Markdown 内容
    async function fetchMarkdownContent(filePath) {
        try {
            const response = await fetch(`/knowledge/${filePath}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const content = await response.text();
            console.log(`Loaded content for ${filePath}:`, content); // 添加调试日志
            return content;
        } catch (error) {
            console.error('加载 Markdown 内容失败:', error, filePath);
            return '';
        }
    }

    // 生成分类导航
    function generateCategoryNav(knowledgeList = allKnowledge) {
        categoryListElement.innerHTML = '';
        
        // 获取当前知识点的分类
        const currentCategory = currentKnowledge ? currentKnowledge.category : null;
        
        // 按分类组织知识点
        const categorizedKnowledge = {};
        knowledgeList.forEach(item => {
            if (!categorizedKnowledge[item.category]) {
                categorizedKnowledge[item.category] = [];
            }
            categorizedKnowledge[item.category].push(item);
        });
        
        // 创建分类导航
        Object.keys(categorizedKnowledge).sort().forEach(category => {
            const items = categorizedKnowledge[category];
            
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            
            const categoryTitle = document.createElement('h4');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category;
            
            const categoryToggle = document.createElement('div');
            categoryToggle.className = 'category-toggle';
            if (category !== currentCategory) {
                categoryToggle.classList.add('collapsed');
            }
            categoryToggle.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>';
            
            categoryHeader.appendChild(categoryTitle);
            categoryHeader.appendChild(categoryToggle);
            categorySection.appendChild(categoryHeader);
            
            const topicList = document.createElement('ul');
            topicList.className = 'topic-list';
            if (category !== currentCategory) {
                topicList.classList.add('collapsed');
            }
            
            items.forEach(item => {
                const topicItem = document.createElement('li');
                topicItem.className = 'topic-item';
                
                const topicLink = document.createElement('a');
                topicLink.className = 'topic-link';
                topicLink.href = `#${item.id}`;
                topicLink.textContent = item.title;
                topicLink.dataset.id = item.id;
                
                if (currentKnowledge && item.id === currentKnowledge.id) {
                    topicLink.classList.add('active');
                }
                
                topicLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelectorAll('.topic-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    const selectedKnowledge = allKnowledge.find(k => k.id === this.dataset.id);
                    if (selectedKnowledge) {
                        showKnowledge(selectedKnowledge);
                    }
                });
                
                topicItem.appendChild(topicLink);
                topicList.appendChild(topicItem);
            });
            
            categorySection.appendChild(topicList);
            categoryListElement.appendChild(categorySection);
            
            categoryHeader.addEventListener('click', function() {
                topicList.classList.toggle('collapsed');
                categoryToggle.classList.toggle('collapsed');
            });
        });
    }

    // 高亮代码
    function highlightCode() {
        document.querySelectorAll('pre code').forEach((block) => {
            Prism.highlightElement(block);
        });
    }

    // 处理图片 URL
    function processImageUrls() {
        const baseImageUrl = 'https://cdn.jsdelivr.net/gh/yihuier/yihuier.github.io@latest';
        
        document.querySelectorAll('#knowledge-question img, #knowledge-answer img').forEach(img => {
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http://') && !src.startsWith('https://')) {
                img.src = `${baseImageUrl}${src.startsWith('/') ? '' : '/'}${src}`;
            }
        });
    }

    // 显示知识点
    async function showKnowledge(knowledge) {
        currentKnowledge = knowledge;
        
        titleElement.textContent = currentKnowledge.title;
        categoryElement.textContent = currentKnowledge.category;
        
        let questionContent = currentKnowledge.question_file ? 
            await fetchMarkdownContent(currentKnowledge.question_file) : 
            currentKnowledge.question;
            
        let answerContent = currentKnowledge.answer_file ? 
            await fetchMarkdownContent(currentKnowledge.answer_file) : 
            currentKnowledge.answer;
        
        questionElement.innerHTML = marked.parse(questionContent || '');
        answerElement.innerHTML = marked.parse(answerContent || '');
        
        highlightCode();
        processImageUrls();
        
        answerContainer.style.display = 'none';
        showAnswerBtn.textContent = '显示答案';
        
        window.location.hash = currentKnowledge.id;
        
        if (window.innerWidth <= 992) {
            document.querySelector('.knowledge-review').scrollIntoView({ behavior: 'smooth' });
        }
        
        generateCategoryNav();
    }

    // 显示随机知识点
    async function showRandomKnowledge() {
        if (allKnowledge.length === 0) {
            titleElement.textContent = '没有找到知识点数据';
            return;
        }
        
        const randomIndex = Math.floor(Math.random() * allKnowledge.length);
        const randomKnowledge = allKnowledge[randomIndex];
        
        await showKnowledge(randomKnowledge);
    }

    // 搜索功能
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            searchClear.classList.remove('visible');
            searchResults.classList.remove('visible');
            generateCategoryNav();
            return;
        }
        
        searchClear.classList.add('visible');
        
        const filteredKnowledge = allKnowledge.filter(item => 
            item.title.toLowerCase().includes(searchTerm)
        );
        
        searchResults.textContent = `找到 ${filteredKnowledge.length} 个匹配的知识点`;
        searchResults.classList.add('visible');
        
        generateCategoryNav(filteredKnowledge);
    }

    // 事件监听器
    showAnswerBtn.addEventListener('click', function() {
        if (answerContainer.style.display === 'none') {
            answerContainer.style.display = 'block';
            showAnswerBtn.textContent = '隐藏答案';
            highlightCode();
        } else {
            answerContainer.style.display = 'none';
            showAnswerBtn.textContent = '显示答案';
        }
    });

    nextQuestionBtn.addEventListener('click', showRandomKnowledge);
    searchInput.addEventListener('input', performSearch);
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        searchResults.classList.remove('visible');
        generateCategoryNav();
    });

    // 初始化
    (async function init() {
        await loadKnowledgeData();
        
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const knowledge = allKnowledge.find(k => k.id === id);
            if (knowledge) {
                await showKnowledge(knowledge);
            } else {
                await showRandomKnowledge();
            }
        } else {
            await showRandomKnowledge();
        }
    })();

    // 配置 marked.js
    marked.setOptions({
        highlight: function(code, lang) {
            if (Prism.languages[lang]) {
                return Prism.highlight(code, Prism.languages[lang], lang);
            }
            return code;
        },
        breaks: true,
        gfm: true
    });
}); 