
exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments()
    users
      .string("username") // Defaults to 255 chars
      .notNullable()
      .unique()
    users
      .string("email")
      .notNullable()
      .unique()
    users
      .string("password")
      .notNullable()
    users
      .integer("zipcode")
      .notNullable()
    users
      .string("biography")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
