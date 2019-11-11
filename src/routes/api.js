import { Router } from 'express'
import auth from '../services/auth'

const router = Router()

/* This is being called from /api already*/
router.get('/', auth, (req, res) => {
  res.json({msg:'Hello from the actual API'})
})

export default router