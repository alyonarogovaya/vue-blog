<template>
  <div class="flex flex-col bg-gray-200">
    <FeedHeader />
    <UserInfo />
    <FeedPosts />
  </div>
</template>

<script setup lang="ts">
import FeedHeader from './FeedHeader.vue'
import FeedPosts from './FeedPosts.vue'
import UserInfo from './UserInfo.vue'
</script>
