<template>
  <div class="bg-gray-200 relative">
    <AvatarComponent size="lg" styles="-top-15 absolute left-2" />
    <div class="flex justify-between items-end px-4">
      <div class="flex flex-col pt-24">
        <h4 class="text-gray-900">Alyona Rogovaya {{ counter }}</h4>
        <span class="text-gray-800"> @{user.nickname}</span>
        <div class="flex">
          <span class="text-gray-800">Joined {user.createdAt}</span>
        </div>
      </div>
      <ButtonComponent @click="openModal">+ Add new post</ButtonComponent>
      <ModalComponent @close="closeModal" v-if="isModalOpen" title="Add new post">
        <NewPostForm @post-submit="onPostSubmit" />
      </ModalComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarComponent from './ui/AvatarComponent.vue'
import ButtonComponent from './ui/ButtonComponent.vue'

import { usePostsStore } from '@/stores/posts'
import { useCounter } from './useCounter'
import ModalComponent from './ui/ModalComponent.vue'
import { ref } from 'vue'
import NewPostForm from './NewPostForm.vue'
import type { PostForm } from '@/types'

const postsStore = usePostsStore()
const { counter } = useCounter()
const isModalOpen = ref(false)

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

function onPostSubmit(data: PostForm) {
  const newPost = {
    id: Math.random(),
    date: Date.now().toString(),
    description: data.text,
    imageUrl: data.imageUrl,
  }
  postsStore.addPost(newPost)

  closeModal()
}
</script>
