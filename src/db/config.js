import dotenv from 'dotenv'
dotenv.config()

const db = require('knex')({
  client: process.env.DB_TYPE,
  connection: {
    filename: process.env.DB_FILE
  },
  useNullAsDefault: true
})

const createTables = async () => {
  !(await db.schema.hasTable('posts'))
    ? await db.schema.createTable('posts', table => {
        table.increments()
        table.string('text')
        table.string('authorId')
        table.string('authorName')
        table.string('authorPhoto')
      })
    : null
  !(await db.schema.hasTable('comments'))
    ? await db.schema.createTable('comments', table => {
        table.increments()
        table.integer('postId')
        table.string('text')
        table.string('authorId')
        table.string('authorName')
      })
    : null
  !(await db.schema.hasTable('likes'))
    ? await db.schema.createTable('likes', table => {
        table.increments()
        table.integer('postId')
        table.string('authorId')
      })
    : null
  !(await db.schema.hasTable('dislikes'))
    ? await db.schema.createTable('dislikes', table => {
        table.increments()
        table.integer('postId')
        table.string('authorId')
      })
    : null
}

createTables()

export default db
