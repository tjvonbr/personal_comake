exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      {
        email: "Bob@yahoo.com",
        username: "Bob",
        password: "pw",
        zipCode: 94107
      },
      {
        email: "Dave@yahoo.com",
        username: "Dave",
        password: "pw",
        zipCode: 94107
      },
      {
        email: "Anne@yahoo.com",
        username: "Anne",
        password: "pw",
        zipCode: 94107
      },
      {
        email: "jen@yahoo.com",
        username: "Jen",
        password: "pw",
        zipCode: 94107
      },
      {
        email: "tim@yahoo.com",
        username: "Tim",
        password: "pw",
        zipCode: 94501
      },
      {
        email: "don@yahoo.com",
        username: "Don",
        password: "pw",
        zipCode: 94501
      },
      {
        email: "beth@yahoo.com",
        username: "Beth",
        password: "pw",
        zipCode: 94501
      },
      {
        email: "aly@yahoo.com",
        username: "Aly",
        password: "pw",
        zipCode: 94501
      },
      {
        email: "sam@yahoo.com",
        username: "Sam",
        password: "pw",
        zipCode: 94107
      }
    ]);
  });
};
