const db = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './db.sqlite'
  },
  useNullAsDefault: true
})

const createTables = async () => {
  !(await db.schema.hasTable('posts'))
    ? await db.schema.createTable('posts', table => {
        table.increments()
        table.string('text')
      })
    : null
  !(await db.schema.hasTable('comments'))
    ? await db.schema.createTable('comments', table => {
        table.increments()
        table.integer('postId')
        table.string('comment')
      })
    : null
  !(await db.schema.hasTable('likes'))
    ? await db.schema.createTable('likes', table => {
        table.increments()
        table.integer('postId')
        table.string('userId')
      })
    : null
  !(await db.schema.hasTable('dislikes'))
    ? await db.schema.createTable('dislikes', table => {
        table.increments()
        table.integer('postId')
        table.string('userId')
      })
    : null
}

createTables()

export default db
