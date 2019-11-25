import db from './config'

const comments = {
  getByPostId: async postId => {
    return await db('comments').where({ postId })
  },
  add: async comment => {
    return await db('comments').insert(comment)
  }
}

export default comments
