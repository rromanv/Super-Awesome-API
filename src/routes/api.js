import { Router } from 'express'
import auth from '../services/auth'
import posts from '../db/posts'

const router = Router()

/* This is being called from /api already*/
router.get('/', auth, (req, res) => {
  res.json({msg:'Hello from the actual API'})
})

router.get('/posts', auth, (req, res) => {
  res.json(posts)
})

router.get('/posts/:postId', auth, (req, res) => {
  const post = posts.filter(p => p.id == req.params.postId)[0]
  post ? res.json(post) : res.status(404).end()
})

router.post('/posts', auth, (req, res) => {
  const newPost = req.body.post
                  ? req.body.post.text
                    ? {
                      id: posts.length,
                      text: req.body.post.text
                    }
                    : null
                  : null
  
  if(newPost) {
    posts.push(newPost)
    res.json(newPost)
  } else {
    res.status(400).end()
  }
})

export default router