
exports.up = function(knex) {
  return knex.schema.createTable("resolution_votes", votes => {
    votes
      .increments()
    votes
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    votes
      .integer("issue_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("issues")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    votes
      .timestamps(true, true)
    votes
      .unique(['user_id', 'issue_id'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resolution_votes")
};
