import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Post, PostForm } from '@/types'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Array<Post>>([])

  async function getPosts() {
    const request = await fetch('http://localhost:3000/posts')
    const data = await request.json()

    posts.value = data
  }

  async function addPost(post: Partial<Post>) {
    await fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return getPosts()
  }

  async function editPost(payload: { id: string; data: PostForm }) {
    await fetch(`http://localhost:3000/posts/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify({ description: payload.data.text, imageUrl: payload.data.imageUrl }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return getPosts()
  }

  async function deletePost(id: string) {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
    })

    return getPosts()
  }

  return { posts, addPost, editPost, deletePost, getPosts }
})
