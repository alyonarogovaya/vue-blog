import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())
app.use(cors())

let posts = [
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
]

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.post('/posts', (req, res) => {
  posts.push(req.body)

  res.status(201).send()
})

app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id)
  posts = posts.map((post) => {
    if (postId === post.id) {
      return { ...post, ...req.body }
    } else {
      return post
    }
  })

  res.status(200).send([])
})

app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id)

  if (postId) {
    posts = posts.filter((post) => post.id !== postId)
    res.json({ message: `User with ID ${postId} deleted successfully` })
  } else {
    res.status(404).json({ message: 'Post not found' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
