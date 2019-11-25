import db from './config'

const posts = {
  getAll: async () => {
    return await db('posts')
  },
  getById: async id => {
    return await db('posts').where({ id })
  },
  add: async post => {
    return await db('posts').insert(post)
  }
}

export default posts
