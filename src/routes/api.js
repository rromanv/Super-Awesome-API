import { Router } from 'express'
import auth from '../services/auth'
import posts from '../db/posts'

const router = Router()

/* This is being called from /api already*/
router.get('/', auth, (req, res) => {
  res.json({msg:'Hello from the actual API'})
})

router.get('/posts', auth, async (req, res) => {
  const allPost = await posts.getAll()
  res.json(allPost)
})

router.get('/posts/:postId', auth, async (req, res) => {
  const post = await posts.getById(req.params.postId)
  console.log(post.length)
  post.length > 0 
    ? res.json(post[0]) 
    : res.status(404).end()
})

router.post('/posts', auth, async (req, res) => {
  const newPost = req.body.post?.text 
    ? await posts.add(req.body.post.text)
    : null

  newPost 
    ? res.json(await posts.getById(newPost[0])) 
    : res.status(400).end()
})

export default router