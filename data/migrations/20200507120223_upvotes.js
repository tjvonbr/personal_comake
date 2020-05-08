
exports.up = function(knex) {
  return knex.schema.createTable("upvotes", upvotes => {
    upvotes
      .increments()
    upvotes
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    upvotes
      .integer("issue_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("issues")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    upvotes
      .timestamps(true, true)
    upvotes
      .unique(['user_id', 'issue_id'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("upvotes")
};
