import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { MongoClient, ObjectId } from 'mongodb'

const uri =
  'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.0'

const client = new MongoClient(uri)

const app = express()
const port = 3000

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())
app.use(cors())

app.get('/posts', async (req, res) => {
  const database = client.db('blog-posts')
  const postsCollection = database.collection('posts')
  const posts = await postsCollection.find().toArray()
  res.json(posts)
})

app.post('/posts', async (req, res) => {
  const database = client.db('blog-posts')
  const postsCollection = database.collection('posts')
  const post = await postsCollection.insertOne(req.body)

  res.status(201).send(post)
})

app.put('/posts/:id', async (req, res) => {
  const postId = req.params.id
  const objectId = new ObjectId(postId)
  const database = client.db('blog-posts')
  const postsCollection = database.collection('posts')
  const post = await postsCollection.findOneAndUpdate({ _id: objectId }, { $set: req.body })
  res.status(200).send(post)
})

app.delete('/posts/:id', async (req, res) => {
  const postId = req.params.id
  const objectId = new ObjectId(postId)
  const database = client.db('blog-posts')
  const postsCollection = database.collection('posts')

  if (postId) {
    await postsCollection.deleteOne({ _id: objectId })
    res.json({ message: `User with ID ${postId} deleted successfully` })
  } else {
    res.status(404).json({ message: 'Post not found' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
