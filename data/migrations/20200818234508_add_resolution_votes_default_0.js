
exports.up = function(knex) {
  return knex.schema.table("issues", votes => {
    votes
      .integer("resolutions")
      .defaultTo(0)
    })
};

exports.down = function(knex) {
  return knex.schema.table("issues", votes => {
    votes.dropColumn("resolutions")
  })
};
