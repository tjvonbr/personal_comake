
exports.up = function(knex) {
  return knex.schema.createTable("issues", issues => {
    issues.increments()
    issues
      .string("title") // Defaults to 255 chars
      .notNullable()
      .unique()
    issues
      .text("description", "longtext")
      .notNullable()
      .unique()
    issues
      .integer("upvotes")
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
