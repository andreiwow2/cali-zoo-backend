
exports.up = function(knex) {
  return knex.schema.createTable('orders_table', (table) => {
    table.increments();
    table.string('orderId', 10).notNullable();
    table.integer('orderedByDbId').notNullable();
    table.integer('productDbIdOrdered').notNullable();
    table.string('orderStatus', 12).notNullable().defaultTo('Pending');
    table.timestamp('placed_at').notNullable().defaultTo(knex.raw('now()'));
    table.foreign('orderedByDbId').references('userId').inTable('accounts');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders_table');
};
