import { Router } from 'express'
import auth from '../services/auth'
import posts from '../db/posts'
import comments from '../db/comments'
import likes from '../db/likes'
import dislikes from '../db/dislikes'

const router = Router()

/* This is being called from /api already*/
router.get('/', auth, (req, res) => {
  res.json({ msg: 'Hello from the actual API' })
})

router.get('/posts', auth, async (req, res) => {
  const allPosts = await posts.getAll()
  res.json(allPosts)
})

router.post('/posts', auth, async (req, res) => {
  const newPost = req.body.post
    ? await posts.add(req.body.post)
    : null

  newPost ? res.json(await posts.getById(newPost[0])) : res.status(400).end()
})

router.get('/posts/:postId', auth, async (req, res) => {
  const post = await posts.getById(req.params.postId)
  post.length > 0 ? res.json(post[0]) : res.status(404).end()
})

router.get('/posts/:postId/comments', auth, async (req, res) => {
  const allComments = await comments.getByPostId(req.params.postId)
  allComments.length > 0 ? res.json(allComments) : res.status(404).end()
})

router.post('/posts/:postId/comments', auth, async (req, res) => {
  const newComment = req.body.comment
    ? await comments.add({postId: req.params.postId, ...req.body.comment})
    : null
  
    newComment ? res.json(newComment) : res.status(400).end()
})

router.get('/posts/:postId/likes', auth, async (req, res) => {
  const likesCount = await likes.getCountByPostId(req.params.postId)
  likesCount.length > 0 ? res.json(likesCount) : res.status(404).end()
})

router.post('/posts/:postId/likes', auth, async (req, res) => {
  const newLike = req.body.like
    ? await likes.add({postId: req.params.postId, ...req.body.like})
    : null
  
    newLike ? res.json(newLike) : res.status(400).end()
})

router.get('/posts/:postId/dislikes', auth, async (req, res) => {
  const dislikesCount = await dislikes.getCountByPostId(req.params.postId)
  dislikesCount.length > 0 ? res.json(dislikesCount) : res.status(404).end()
})

router.post('/posts/:postId/dislikes', auth, async (req, res) => {
  const newDislike = req.body.dislike
    ? await dislikes.add({postId: req.params.postId, ...req.body.dislike})
    : null
  
    newDislike ? res.json(newDislike) : res.status(400).end()
})

export default router
