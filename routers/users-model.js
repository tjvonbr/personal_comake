const db = require("../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  findCommentById,
  getIssuesByUserId,
  getUserWithIssues,
  remove,
  update
};

function find() {
  return db("users").select("id", "username", "password", "email");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findCommentById(id) {
  return db("comments")
    .where({ id })
    .first();
}

function getIssuesByUserId(id) {
  return db("issues").where({ user_id: id });
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

// get user with issues attatched
async function getUserWithIssues(id) {
  let user = await findById(id);
  let issues = await getIssuesByUserId(id);
  if (user) {
    return { ...user, issues };
  } else {
    return null;
  }
}
