<template>
  <ul>
    <PostComponent v-for="post in sortedPosts" :key="post.id" :post="post" />
  </ul>
</template>

<script setup lang="ts">
import PostComponent from './PostComponent.vue'

import { usePostsStore } from '@/stores/posts'
import { computed } from 'vue'

const postsStore = usePostsStore()

const sortedPosts = computed(() => {
  return [...postsStore.posts].sort((a, b) => Number(b.date) - Number(a.date))
})
</script>
