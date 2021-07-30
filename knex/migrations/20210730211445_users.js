
exports.up = function(knex, Promise) {
    return knex.schema.withSchema("public").createTable('users', function(table) {
      table.increments();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.withSchema("public").dropTable('users');
  }