
exports.up = function(knex) {
  return knex.schema.table("users", users => {
    users
      .string("first_name")
    users
      .string("last_name")
  })
};

exports.down = function(knex) {
  return knex.chema.table("users", users => {
    users.dropColumn("first_name")
    users.dropColumn("last_name")
  })
};
