---
layout: default
title: 知识复习
permalink: /knowledge/
---

<!-- 添加 CSS 和 JavaScript 引用 -->
<link rel="stylesheet" href="{{ '/assets/css/knowledge.css' | relative_url }}">

<div class="knowledge-container">
    <div class="knowledge-page">
        <!-- 左侧导航 -->
        <div class="category-nav">
            <div class="category-nav-inner">
                <h3>知识点分类</h3>
                <!-- 搜索框 -->
                <div class="search-container">
                    <input type="text" id="search-input" class="search-input" placeholder="搜索知识点...">
                    <button id="search-clear" class="search-clear" title="清除搜索">×</button>
                </div>
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

<!-- 添加依赖库 -->
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

<!-- 添加知识点脚本 -->
<script src="{{ '/assets/js/knowledge.js' | relative_url }}"></script> 