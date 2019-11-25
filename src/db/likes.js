import db from './config'

const likes = {
  getCountByPostId: async postId => {
    return await db('likes').count('id', {as: 'likes'}).where({ postId })
  },
  add: async newLike => {
    return await db('likes').insert(newLike)
  }
}

export default likes
