
exports.up = function(knex) {
  return knex.schema.table("resolution_votes", votes => {
      votes
        .integer("resolution_votes")
  })
};

exports.down = function(knex) {
  return knex.schema.table("resolution_votes", votes => {
      votes.dropColumn("resolution_votes")
  })
};
