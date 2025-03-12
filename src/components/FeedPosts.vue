<template>
  <ul>
    <PostComponent
      @edit-post="(post) => $emit('editPost', post)"
      v-for="feedPost in sortedPosts"
      :key="feedPost._id"
      :post="feedPost"
    />
  </ul>
</template>

<script setup lang="ts">
import PostComponent from './PostComponent.vue'

import { usePostsStore } from '@/stores/posts'
import { computed, onMounted } from 'vue'

const postsStore = usePostsStore()

const sortedPosts = computed(() => {
  return [...postsStore.posts].sort((a, b) => Number(b.date) - Number(a.date))
})

onMounted(() => {
  postsStore.getPosts()
})
</script>
