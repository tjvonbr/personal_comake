
exports.up = function(knex) {
  return knex.schema.table("users", users => {
    users
      .timestamp("joined")
      .notNullable()
      .defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.table("users", users => {
    users
      .dropColumn("joined")
  })
};
