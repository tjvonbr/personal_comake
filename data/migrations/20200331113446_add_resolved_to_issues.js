
exports.up = function(knex) {
  return knex.schema.table("issues", issues => {
    issues
      .boolean("resolved")
      .defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.table("issues", issues => {
    issues
      .dropColumn("resolved")
  })
};
