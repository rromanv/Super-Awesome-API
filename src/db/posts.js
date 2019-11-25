import db from './config'

const posts = {
  getAll: async () => {
    return await db('posts')
  },
  getById: async id => {
    return await db('posts').where({ id })
  },
  add: async text => {
    return await db('posts').insert({ text })
  }
}

export default posts
