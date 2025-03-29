---
layout: default
title: 知识复习
permalink: /knowledge/
---

<style>
/* 重置默认样式，确保没有额外的边距和内边距 */
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
}

body > .container {
    padding: 0;
    margin: 0;
    max-width: 100%;
    width: 100%;
}

/* 全局容器样式 */
.knowledge-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 1000;
    background-color: #f5f5f5;
}

/* 知识页面布局 */
.knowledge-page {
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

/* 左侧导航样式 */
.category-nav {
    width: 280px;
    flex-shrink: 0;
    height: 100%;
    overflow: hidden;
    padding: 20px;
    background-color: #f5f5f5;
}

.category-nav-inner {
    height: 100%;
    overflow-y: auto;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.category-nav-inner h3 {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.2rem;
}

/* 搜索框样式 */
.search-container {
    margin-bottom: 20px;
    position: relative;
}

.search-input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 0.9rem;
    box-sizing: border-box;
    transition: all 0.3s;
}

.search-input:focus {
    border-color: var(--primary-color, #3f51b5);
    outline: none;
    box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.2);
}

.search-clear {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    font-size: 1rem;
    display: none;
}

.search-clear.visible {
    display: block;
}

/* 右侧内容区样式 */
.knowledge-review {
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
    padding: 20px;
    background-color: #f5f5f5;
}

.knowledge-card {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin-bottom: 20px;
}

/* 知识点元数据样式 */
.knowledge-meta {
    margin-bottom: 20px;
}

.knowledge-meta span {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-right: 10px;
}

#knowledge-category {
    background-color: #e3f2fd;
    color: #1976d2;
}

/* 按钮样式 */
.button-container {
    margin-top: 30px;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s;
    margin-right: 15px;
}

#show-answer-btn {
    background-color: var(--primary-color, #3f51b5);
    color: white;
}

#show-answer-btn:hover {
    background-color: #3949ab;
}

#next-question-btn {
    background-color: #f5f5f5;
    color: #333;
}

#next-question-btn:hover {
    background-color: #e0e0e0;
}

/* 代码块样式 */
pre {
    background-color: #f5f7fa;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 15px 0;
}

code {
    font-family: 'Fira Code', monospace;
}

/* 添加代码块样式 */
pre[class*="language-"] {
    border-radius: 8px;
    margin: 1.5em 0;
}

code[class*="language-"] {
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 0.9em;
}

/* 分类导航样式 */
.category-section {
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
}

.category-section:last-child {
    border-bottom: none;
}

.category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 5px 0;
    user-select: none;
}

.category-title {
    margin: 0;
    font-size: 1rem;
    color: #333;
    font-weight: 500;
}

.category-toggle {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
}

.category-toggle.collapsed {
    transform: rotate(-90deg);
}

.topic-list {
    list-style: none;
    padding: 0;
    margin: 10px 0 0 0;
    max-height: 1000px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

.topic-list.collapsed {
    max-height: 0;
}

.topic-item {
    margin-bottom: 5px;
}

.topic-link {
    display: block;
    padding: 8px 12px;
    border-radius: 6px;
    color: #333;
    text-decoration: none;
    transition: all 0.2s;
    font-size: 0.9rem;
}

.topic-link:hover {
    background-color: #f5f5f5;
    color: var(--primary-color, #3f51b5);
}

.topic-link.active {
    background-color: #e3f2fd;
    color: #1976d2;
    font-weight: 500;
}

/* 加载提示 */
.category-loading {
    color: #666;
    font-style: italic;
}

/* 图片和视频容器 */
#knowledge-image-container img,
#knowledge-video-container video {
    max-width: 100%;
    border-radius: 8px;
    margin: 20px 0;
}

/* 搜索结果提示 */
.search-results {
    margin: 10px 0;
    padding: 8px 12px;
    background-color: #f5f5f5;
    border-radius: 6px;
    font-size: 0.9rem;
    color: #666;
    display: none;
}

.search-results.visible {
    display: block;
}

.no-results {
    padding: 20px 0;
    text-align: center;
    color: #666;
    font-style: italic;
}

/* 响应式设计 */
@media (max-width: 992px) {
    .knowledge-page {
        flex-direction: column;
    }
    
    .category-nav {
        width: 100%;
        height: auto;
        padding: 20px 20px 0 20px;
    }
    
    .category-nav-inner {
        height: auto;
        max-height: 300px;
    }
    
    .knowledge-review {
        padding: 20px;
    }
}

/* 隐藏默认的页头和页脚 */
header, footer, .site-header, .site-footer {
    display: none !important;
}

/* 返回按钮 */
.back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1100;
    background-color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s;
}

.back-button:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

.back-button svg {
    width: 20px;
    height: 20px;
    fill: #333;
}

/* 高亮搜索结果 */
.highlight-match {
    background-color: #fff59d;
    padding: 0 2px;
    border-radius: 2px;
}

/* Markdown 内容样式 */
#knowledge-question, #knowledge-answer {
    line-height: 1.6;
}

#knowledge-question h1, #knowledge-answer h1,
#knowledge-question h2, #knowledge-answer h2,
#knowledge-question h3, #knowledge-answer h3,
#knowledge-question h4, #knowledge-answer h4,
#knowledge-question h5, #knowledge-answer h5,
#knowledge-question h6, #knowledge-answer h6 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
}

#knowledge-question p, #knowledge-answer p {
    margin-bottom: 1em;
}

#knowledge-question ul, #knowledge-answer ul,
#knowledge-question ol, #knowledge-answer ol {
    padding-left: 2em;
    margin-bottom: 1em;
}

#knowledge-question blockquote, #knowledge-answer blockquote {
    border-left: 4px solid #e0e0e0;
    padding-left: 1em;
    margin-left: 0;
    color: #666;
}

#knowledge-question table, #knowledge-answer table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1em;
}

#knowledge-question th, #knowledge-answer th,
#knowledge-question td, #knowledge-answer td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

#knowledge-question th, #knowledge-answer th {
    background-color: #f5f5f5;
}
</style>

<div class="knowledge-container">
    <!-- 返回按钮 -->
    <a href="/" class="back-button" title="返回首页">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
    </a>
    
    <div class="knowledge-page">
        <!-- 左侧分类导航 -->
        <div class="category-nav">
            <div class="category-nav-inner">
                <h3>知识点分类</h3>
                
                <!-- 搜索框 -->
                <div class="search-container">
                    <input type="text" id="search-input" class="search-input" placeholder="搜索知识点...">
                    <button id="search-clear" class="search-clear" title="清除搜索">×</button>
                </div>
                
                <!-- 搜索结果提示 -->
                <div id="search-results" class="search-results"></div>
                
                <div id="category-list">
                    <!-- 分类列表将通过 JavaScript 动态生成 -->
                    <div class="category-loading">加载中...</div>
                </div>
            </div>
        </div>
        
        <!-- 右侧内容区 -->
        <div class="knowledge-review">
            <div class="knowledge-card">
                <div id="question-container">
                    <h2 id="knowledge-title"></h2>
                    <div class="knowledge-meta">
                        <span id="knowledge-category"></span>
                    </div>
                    <div id="knowledge-question"></div>
                    
                    {% if site.data.knowledge %}
                    <div id="knowledge-image-container" style="display: none;">
                        <img id="knowledge-image" src="" alt="知识点图片">
                    </div>
                    
                    <div id="knowledge-video-container" style="display: none;">
                        <video id="knowledge-video" controls>
                            <source src="" type="video/mp4">
                            您的浏览器不支持视频标签。
                        </video>
                    </div>
                    {% else %}
                    <p class="error-message">未找到知识点数据。请确保 _data/knowledge 目录中包含知识点文件。</p>
                    {% endif %}
                </div>
                
                <div id="answer-container" style="display: none;">
                    <h3>答案：</h3>
                    <div id="knowledge-answer"></div>
                </div>
                
                <div class="button-container">
                    <button id="show-answer-btn" class="btn">显示答案</button>
                    <button id="next-question-btn" class="btn">下一个知识点</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 添加 marked.js 和 Prism.js -->
<script src="https://cdn.jsdelivr.net/npm/marked@4.3.0/marked.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css">
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-javascript.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-jsx.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-python.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-css.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-html.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-bash.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-java.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-c.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-cpp.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-go.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-ruby.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-rust.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-typescript.min.js"></script>

<script>
document.addEventListener('DOMContentLoaded', async function() {
    // 获取DOM元素
    const categoryListElement = document.getElementById('category-list');
    const titleElement = document.getElementById('knowledge-title');
    const categoryElement = document.getElementById('knowledge-category');
    const questionElement = document.getElementById('knowledge-question');
    const answerElement = document.getElementById('knowledge-answer');
    const answerContainer = document.getElementById('answer-container');
    
    const imageContainer = document.getElementById('knowledge-image-container');
    const imageElement = document.getElementById('knowledge-image');
    const videoContainer = document.getElementById('knowledge-video-container');
    const videoElement = document.getElementById('knowledge-video');
    
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const searchResults = document.getElementById('search-results');
    
    // 当前知识点
    let currentKnowledge = null;
    
    // 获取文件内容的函数
    async function fetchMarkdownContent(filePath) {
        if (!filePath) return null;
        try {
            const response = await fetch('/assets/knowledge/' + filePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            console.error('Error fetching markdown content:', error);
            return '内容加载失败';
        }
    }
    
    // 高亮代码函数
    function highlightCode() {
        // 使用 setTimeout 确保在 DOM 更新后执行
        setTimeout(() => {
            // 查找所有预格式化代码块
            document.querySelectorAll('pre code').forEach((block) => {
                // 如果代码块没有语言类，添加默认语言类
                if (!block.className.includes('language-')) {
                    const parent = block.parentNode;
                    // 尝试从父元素的类名中提取语言
                    const parentClasses = parent.className.split(' ');
                    let language = '';
                    
                    for (const cls of parentClasses) {
                        if (cls.startsWith('language-')) {
                            language = cls;
                            break;
                        }
                    }
                    
                    // 如果没有找到语言，使用默认语言
                    if (!language) {
                        language = 'language-javascript';
                    }
                    
                    block.className = language;
                }
                
                // 应用 Prism 高亮
                Prism.highlightElement(block);
            });
        }, 0);
    }
    
    // 获取所有知识点数据
    const allKnowledge = [];
    let knowledgeId = 1;
    
    {% if site.data.knowledge %}
        {% for knowledge_file in site.data.knowledge %}
            {% assign knowledge_data = knowledge_file[1] %}
            {% for item in knowledge_data %}
                allKnowledge.push({
                    id: '{{ knowledge_file[0] }}-' + {{ forloop.index }},
                    title: {{ item.title | jsonify }},
                    category: {{ item.category | jsonify }},
                    question: {{ item.question | jsonify }},
                    answer: {{ item.answer | jsonify }},
                    question_file: {{ item.question_file | jsonify }},
                    answer_file: {{ item.answer_file | jsonify }},
                    image: {{ item.image | jsonify }},
                    video: {{ item.video | jsonify }}
                });
            {% endfor %}
        {% endfor %}
    {% endif %}
    
    // 生成分类导航
    function generateCategoryNav(knowledgeList = allKnowledge) {
        // 清空导航
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
            
            // 创建分类区域
            const categorySection = document.createElement('div');
            categorySection.className = 'category-section';
            
            // 创建分类标题和折叠按钮
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            
            const categoryTitle = document.createElement('h4');
            categoryTitle.className = 'category-title';
            categoryTitle.textContent = category;
            
            const categoryToggle = document.createElement('div');
            categoryToggle.className = 'category-toggle';
            // 默认折叠，除非是当前知识点的分类
            if (category !== currentCategory) {
                categoryToggle.classList.add('collapsed');
            }
            
            categoryToggle.innerHTML = '<svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>';
            
            categoryHeader.appendChild(categoryTitle);
            categoryHeader.appendChild(categoryToggle);
            categorySection.appendChild(categoryHeader);
            
            // 创建知识点列表
            const topicList = document.createElement('ul');
            topicList.className = 'topic-list';
            // 默认折叠，除非是当前知识点的分类
            if (category !== currentCategory) {
                topicList.classList.add('collapsed');
            }
            
            // 添加知识点
            items.forEach(item => {
                const topicItem = document.createElement('li');
                topicItem.className = 'topic-item';
                
                const topicLink = document.createElement('a');
                topicLink.className = 'topic-link';
                topicLink.href = `#${item.id}`;
                topicLink.textContent = item.title;
                topicLink.dataset.id = item.id;
                
                // 如果是当前知识点，添加活动状态
                if (currentKnowledge && item.id === currentKnowledge.id) {
                    topicLink.classList.add('active');
                }
                
                // 点击知识点链接
                topicLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // 移除所有活动状态
                    document.querySelectorAll('.topic-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    
                    // 添加活动状态
                    this.classList.add('active');
                    
                    // 显示选中的知识点
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
            
            // 添加折叠/展开功能
            categoryHeader.addEventListener('click', function() {
                topicList.classList.toggle('collapsed');
                categoryToggle.classList.toggle('collapsed');
            });
        });
    }
    
    // 转义正则表达式特殊字符
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    // 搜索功能
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            // 清空搜索，显示所有知识点
            searchResults.classList.remove('visible');
            searchClear.classList.remove('visible');
            generateCategoryNav();
            return;
        }
        
        // 显示清除按钮
        searchClear.classList.add('visible');
        
        // 过滤知识点
        const filteredKnowledge = allKnowledge.filter(item => 
            item.title.toLowerCase().includes(searchTerm)
        );
        
        // 显示搜索结果数量
        searchResults.textContent = `找到 ${filteredKnowledge.length} 个匹配的知识点`;
        searchResults.classList.add('visible');
        
        // 重新生成导航
        generateCategoryNav(filteredKnowledge);
        
        // 展开所有分类
        document.querySelectorAll('.topic-list').forEach(list => {
            list.classList.remove('collapsed');
        });
        
        document.querySelectorAll('.category-toggle').forEach(toggle => {
            toggle.classList.remove('collapsed');
        });
    }
    
    // 搜索输入事件
    searchInput.addEventListener('input', performSearch);
    
    // 清除搜索
    searchClear.addEventListener('click', function() {
        searchInput.value = '';
        searchClear.classList.remove('visible');
        searchResults.classList.remove('visible');
        generateCategoryNav();
    });
    
    // 显示指定的知识点
    async function showKnowledge(knowledge) {
        currentKnowledge = knowledge;
        
        // 更新UI
        titleElement.textContent = currentKnowledge.title;
        categoryElement.textContent = currentKnowledge.category;
                
        // 加载问题内容
        let questionContent;
        if (currentKnowledge.question_file) {
            questionContent = await fetchMarkdownContent(currentKnowledge.question_file);
        } else {
            questionContent = currentKnowledge.question;
        }
        
        // 加载答案内容
        let answerContent;
        if (currentKnowledge.answer_file) {
            answerContent = await fetchMarkdownContent(currentKnowledge.answer_file);
        } else {
            answerContent = currentKnowledge.answer;
        }
        
        // 使用 marked.js 解析 Markdown
        questionElement.innerHTML = marked.parse(questionContent || '');
        answerElement.innerHTML = marked.parse(answerContent || '');
        
        // 高亮代码
        highlightCode();
        
        // 隐藏答案
        answerContainer.style.display = 'none';
        showAnswerBtn.textContent = '显示答案';
        
        // 处理图片
        if (currentKnowledge.image) {
            imageElement.src = currentKnowledge.image;
            imageContainer.style.display = 'block';
        } else {
            imageContainer.style.display = 'none';
        }
        
        // 处理视频
        if (currentKnowledge.video) {
            videoElement.src = currentKnowledge.video;
            videoContainer.style.display = 'block';
        } else {
            videoContainer.style.display = 'none';
        }
        
        // 更新 URL 哈希
        window.location.hash = currentKnowledge.id;
        
        // 在移动设备上，滚动到内容区域
        if (window.innerWidth <= 992) {
            document.querySelector('.knowledge-review').scrollIntoView({ behavior: 'smooth' });
        }
        
        // 重新生成导航，确保当前分类展开
        generateCategoryNav();
    }
    
    // 显示随机知识点
    async function showRandomKnowledge() {
        if (allKnowledge.length === 0) {
            titleElement.textContent = '没有找到知识点数据';
            return;
        }
        
        // 随机选择一个知识点
        const randomIndex = Math.floor(Math.random() * allKnowledge.length);
        const randomKnowledge = allKnowledge[randomIndex];
        
        // 更新导航中的活动状态
        document.querySelectorAll('.topic-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.id === randomKnowledge.id) {
                link.classList.add('active');
            }
        });
        
        // 显示选中的知识点
        await showKnowledge(randomKnowledge);
    }
    
    // 显示/隐藏答案
    showAnswerBtn.addEventListener('click', function() {
        if (answerContainer.style.display === 'none') {
            answerContainer.style.display = 'block';
            showAnswerBtn.textContent = '隐藏答案';
            // 显示答案后高亮代码
            highlightCode();
        } else {
            answerContainer.style.display = 'none';
            showAnswerBtn.textContent = '显示答案';
        }
    });
    
    // 下一个知识点
    nextQuestionBtn.addEventListener('click', showRandomKnowledge);
    
    // 初始化
    generateCategoryNav();
    
    // 检查 URL 哈希，如果有则显示对应的知识点
    if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const knowledge = allKnowledge.find(k => k.id === id);
        if (knowledge) {
            // 设置导航中的活动状态
            setTimeout(() => {
                const link = document.querySelector(`.topic-link[data-id="${id}"]`);
                if (link) {
                    link.classList.add('active');
                    
                    // 展开包含该知识点的分类
                    const categorySection = link.closest('.category-section');
                    if (categorySection) {
                        const topicList = categorySection.querySelector('.topic-list');
                        const categoryToggle = categorySection.querySelector('.category-toggle');
                        
                        if (topicList) topicList.classList.remove('collapsed');
                        if (categoryToggle) categoryToggle.classList.remove('collapsed');
                    }
                }
                showKnowledge(knowledge);
            }, 100);
        } else {
            showRandomKnowledge();
        }
    } else {
        // 初始加载一个随机知识点
        showRandomKnowledge();
    }

    // 配置 marked.js
    marked.setOptions({
        highlight: function(code, lang) {
            if (Prism.languages[lang]) {
                return Prism.highlight(code, Prism.languages[lang], lang);
            } else {
                return code;
            }
        },
        breaks: true,
        gfm: true
    });
});
</script> 