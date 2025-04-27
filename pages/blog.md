---
layout: default
title: 博客
permalink: /blog/
---

<div class="blog-container">
    {% if site.posts.size > 0 %}
    <div class="blog-posts">
        {% for post in site.posts %}
        <div class="blog-post">
            {% if post.image %}
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="blog-post-image">
            {% else %}
            <img src="https://via.placeholder.com/400x200/6c8eef/ffffff" alt="{{ post.title }}" class="blog-post-image">
            {% endif %}
            <div class="blog-post-content">
                <div class="blog-post-date">{{ post.date | date: "%Y年%m月%d日" }}</div>
                <h3 class="blog-post-title">{{ post.title }}</h3>
                <p class="blog-post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
                <a href="{{ post.url | relative_url }}" class="read-more">阅读更多 →</a>
            </div>
        </div>
        {% endfor %}
    </div>
    {% else %}
    <div class="empty-blog-state">
        <div class="empty-blog-icon">
            <i class="fas fa-pencil-alt"></i>
        </div>
        <h2 class="empty-blog-title">暂无博客文章</h2>
        <p class="empty-blog-message">博客内容正在创作中，敬请期待！</p>
        <p class="empty-blog-submessage">请稍后再来查看，或者返回<a href="/">首页</a>浏览其他内容。</p>
    </div>
    {% endif %}
</div>