const db = require('knex')({
  client: 'sqlite3',
  connection: () => ({
    filename: './db.sqlite'
  }),
  useNullAsDefault: true
})

const createTables = async () => {
  !await db.schema.hasTable('posts')
    ? await db.schema.createTable('posts', function(table) {
        table.increments()
        table.string('text')
      })
    : null
}

createTables()

export default db
