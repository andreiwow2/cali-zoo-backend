
exports.up = function(knex) {
  return knex.schema.table('accounts', function(t) {
    t.string('userEmail').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table('accounts', function(t) {
    t.dropColumn('userEmail');
  });
};
