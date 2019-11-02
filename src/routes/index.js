import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({msg:'Hello from Super Awesome API'})
})

export default router