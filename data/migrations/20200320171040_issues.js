
exports.up = function(knex) {
  return knex.schema.createTable("issues", issues => {
    issues
      .increments()
    issues
      .string("title") // Defaults to 255 characters
      .notNullable()
      .unique()
    issues
      .text("description")
      .notNullable()
      .unique()
    issues
      .integer("zipcode")
      .notNullable()
    issues
      .integer("upvotes")
      .defaultTo(0)
    issues
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("issues");
};
