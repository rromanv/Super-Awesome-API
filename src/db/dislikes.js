import db from './config'

const dislikes = {
  getCountByPostId: async postId => {
    return await db('dislikes').count('id', {as: 'dislikes'}).where({ postId })
  },
  add: async newDislike => {
    return await db('dislikes').insert(newDislike)
  }
}

export default dislikes
