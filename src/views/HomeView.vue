<template>
  <main class="grid grid-cols-3 bg-white">
    <div class=""></div>
    <FeedComponent />
  </main>
</template>

<script setup lang="ts">
import FeedComponent from '../components/FeedComponent.vue'
</script>

<style scoped>
.form {
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form * {
  width: 100%;
}

.error {
  color: red;
}
</style>
