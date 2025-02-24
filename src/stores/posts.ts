import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Post, PostForm } from '@/types'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Array<Post>>([
    {
      id: 1,
      date: '1740314734902',
      description: 'Exploring the beauty of the outdoors! Nature never ceases to amaze. 🌿✨',
    },
    {
      id: 2,
      date: '1740314734902',
      description: 'Just finished a great book on personal growth. Highly recommend it! 📚',
    },
    {
      id: 3,
      date: '1740314734903',
      description: 'What a fantastic day for coding! Learned a lot about React and TypeScript. 💻',
    },
    {
      id: 4,
      date: '1740314734904',
      description: 'Finally tried the new café in town. The coffee was incredible! ☕',
    },
    {
      id: 5,
      date: '1740314734905',
      description: 'Anyone else excited for the upcoming tech conference? Can’t wait to attend! 🚀',
    },
    {
      id: 6,
      date: '1740314734906',
      description: 'Taking some time to reflect on my goals for the year. Feeling optimistic. 🌟',
    },
    {
      id: 7,
      date: '1740314734907',
      description: 'Had an amazing workout session today. Health is wealth! 💪',
    },
    {
      id: 8,
      date: '1740314734908',
      description: 'Started learning a new programming language. The journey begins! 🛠️',
    },
    {
      id: 9,
      date: '1740314734909',
      description: 'Caught a beautiful sunset this evening. Grateful for the little things. 🌅',
    },
    {
      id: 10,
      date: '1740314734910',
      description: 'Looking for recommendations for a good sci-fi movie. Any suggestions? 🎥',
    },
  ])

  function addPost(post: Post) {
    posts.value.push(post)
  }

  function editPost(payload: { id: number; data: PostForm }) {
    posts.value = posts.value.map((post) => {
      if (payload.id === post.id) {
        return { ...post, description: payload.data.text, imageUrl: payload.data.imageUrl }
      } else {
        return post
      }
    })
  }

  function deletePost(id: number) {
    posts.value = posts.value.filter((post) => post.id !== id)
  }

  return { posts, addPost, editPost, deletePost }
})
