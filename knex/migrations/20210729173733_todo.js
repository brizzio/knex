/* 
  table.increments('id')
  table.string('account_name')
  table.integer('age')
  table.float('age')
  table.decimal('balance', 8, 2)
  table.boolean('is_admin')
  table.date('birthday')
  table.time('created_at')
  table.timestamp('created_at').defaultTo(knex.fn.now())
  table.json('profile')
  table.jsonb('profile')
  table.uuid('id').primary()
*/



exports.up = function(knex) {
    return knex.schema.withSchema("public").createTable("todo", tbl => {
        tbl.increments();
        tbl.text("task", 128).notNullable();
    })

};

exports.down = function(knex) {
  return knex.schema.withSchema("public").dropTableIfExists("todo");
};
