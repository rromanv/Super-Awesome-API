import db from './config'
const posts = {
  getAll: async () => {
    const all = await db('posts')
    console.log(all)
    return all
  },
  getById: async id => {
    return await db('posts').where({id})
  },
  add: async text => {
    return await db('posts').insert({text})
  }
}

export default posts
