
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', (table) => {
    table.increments('id').primary()
    table.bigInteger('user_id').unsigned().index().references('id').inTable('users')
    table.string('title')
    table.text('body')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogs')
};
