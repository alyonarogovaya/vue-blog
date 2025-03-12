export type Post = {
  _id: string
  description: string
  date: string
  imageUrl?: string
}

export type PostForm = {
  text: string
  imageUrl?: string
}
