
exports.up = function(knex) {
  return knex.schema.table("issues", votes => {
    votes
      .integer("resolution_votes")
  })
};

exports.down = function(knex) {
  return knex.schema.table("issues", votes => {
    votes.dropColumn("resolution_votes")
  })
};
