<template>
  <div class="flex flex-col bg-gray-200">
    <FeedHeader />
    <UserInfo @add-new-post="openModal" />
    <FeedPosts @edit-post="openModal" />
    <ModalComponent
      @close="closeModal"
      v-if="isModalOpen"
      :title="editingPost ? 'Edit Post' : 'Add New Post'"
    >
      <PostForm :post="editingPost" @editPost="onPostEdit" @createPost="onPostCreate" />
    </ModalComponent>
  </div>
</template>

<script setup lang="ts">
import FeedHeader from './FeedHeader.vue'
import FeedPosts from './FeedPosts.vue'
import UserInfo from './UserInfo.vue'
import ModalComponent from './ui/ModalComponent.vue'
import PostForm from './PostForm.vue'
import { ref } from 'vue'
import type { Post, PostForm as PostFormType } from '@/types'
import { usePostsStore } from '@/stores/posts'

const isModalOpen = ref(false)
const postsStore = usePostsStore()
const editingPost = ref<Post | undefined>(undefined)

function openModal(post?: Post) {
  isModalOpen.value = true
  editingPost.value = post
}

function closeModal() {
  isModalOpen.value = false
}

function onPostCreate(data: PostFormType) {
  const newPost = {
    description: data.text,
    imageUrl: data.imageUrl,
  }
  postsStore.addPost(newPost)

  closeModal()
}

function onPostEdit(payload: { id: string; data: PostFormType }) {
  postsStore.editPost(payload)
  closeModal()
}
</script>
