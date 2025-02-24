<template>
  <div class="bg-gray-200 relative">
    <AvatarComponent size="lg" styles="-top-15 absolute left-2" />
    <div class="flex justify-between items-end px-4">
      <div class="flex flex-col pt-24">
        <h4 class="text-gray-900">Alyona Rogovaya</h4>
        <span class="text-gray-800"> @{user.nickname}</span>
        <div class="flex">
          <span class="text-gray-800">Joined {user.createdAt}</span>
        </div>
      </div>
      <ButtonComponent @click="$emit('addNewPost')">+ Add new post</ButtonComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarComponent from './ui/AvatarComponent.vue'
import ButtonComponent from './ui/ButtonComponent.vue'
</script>
