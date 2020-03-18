
exports.up = function(knex) {
  return knex.schema.table("issues", issues => {
    issues
      .integer("zipcode")
  })
};

exports.down = function(knex) {
  return knex.schema.table("issues", issues => {
    issues
      .dropColumn("zipcode")
  });
};
