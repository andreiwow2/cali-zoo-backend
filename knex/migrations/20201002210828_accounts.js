
exports.up = function(knex) {
  return knex.schema.createTable('accounts', (table) => {
    table.increments('userId');
    table.string('userName', 25).unique().notNullable();
    table.string('userPassword').notNullable();
    table.string('userRole').defaultTo('user');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('accounts');
};
