<template>
  <li class="px-2 py-4">
    <div class="">
      <div class="flex justify-between">
        <div class="flex gap-4">
          <AvatarComponent size="sm" />
          <div class="flex justify-between">
            <div class="flex gap-2">
              <h6 class="text-gray-900">{user.fullName}</h6>
              <span class="text-gray-800"> @{user.nickname}</span>
              <span class="text-gray-800">{{
                new Date(Number(post.date)).toLocaleDateString()
              }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <button
            @click="openModal"
            class="p-1 rounded-sm bg-gray-300 border-gray-400 border hover:bg-gray-400 transition"
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      <p class="text-gray-900 p-2">{{ post.description }}</p>
    </div>
    <ModalComponent
      @close="closeModal"
      v-if="isModalOpen"
      title="Are you sure you want to delete the post?"
    >
      <div class="flex gap-4">
        <ButtonComponent variant="secondary" @click="closeModal">Cancel</ButtonComponent>
        <ButtonComponent @click="postsStore.deletePost(post.id)">Yes, proceed</ButtonComponent>
      </div>
    </ModalComponent>
  </li>
</template>

<script setup lang="ts">
import type { Post } from '@/types'
import AvatarComponent from './ui/AvatarComponent.vue'
import TrashIcon from './icons/TrashIcon.vue'
import ModalComponent from './ui/ModalComponent.vue'
import ButtonComponent from './ui/ButtonComponent.vue'
import { ref } from 'vue'
import { usePostsStore } from '@/stores/posts'

defineProps<{
  post: Post
}>()

const isModalOpen = ref(false)
const postsStore = usePostsStore()

function openModal() {
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}
</script>
