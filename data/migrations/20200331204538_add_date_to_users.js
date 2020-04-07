
exports.up = function(knex) {
  return knex.schema.table("users", users => {
    users
      .date("joined")
  })
};

exports.down = function(knex) {
  return knex.schema.table("users", users => {
    users
      .dropColumn("joined")
  })
};
