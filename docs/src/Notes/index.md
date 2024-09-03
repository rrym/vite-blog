---
layout: page
sidebar: false

hero:
  title: "Blogs"
  subTitle: "📚 欢迎来到我的Blogs"

types:
  - name: "Java"
    desc: "Java天下无敌"
    link: "/Notes/Java/"
    icon: "✨"
  - name: "MySQL"
    desc: "一把梭哈"
    link: "/Notes/MySQL/"
    icon: "🛫️"
  - name: "微服务"
    desc: "What is Use Service Mesh"
    link: "/Notes/Service/"
    icon: "🏃"
# flow: true
---

<script setup>
import BlogArchive from '../../.vitepress/views/BlogArchive.vue'
</script>

<BlogArchive/>
