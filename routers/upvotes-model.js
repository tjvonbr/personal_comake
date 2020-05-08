const db = require("../data/db-config");

module.exports = {
  findVoteBy,
  insertUpvote,
  findVoteByIssueId,
  issueVoteById,
  commentVoteById,
  removeIssueUpvote,
  removeCommentUpvote,
  findVoteByIssueId
};

function insertUpvote(upvote) {
  return db("upvotes")
    .insert(upvote, "id")
    .then(ids => {
      const {id} = ids;
      return findVoteBy(id)
    })
}

function findVoteBy(id) {
  return db("upvotes").where(id);
}

function findVoteByIssueId(issue_id) {
  return db("upvotes")
  .where({ issue_id })
  .first()
}

function findVoteByIssueId(issue_id) {
  return db("upvotes").where({issue_id})
}

function issueVoteById(id) {
  return db("issueUpvotes").where({ issue_id: id });
}

function commentVoteById(id) {
  return db("commentUpvotes").where({ comment_id: id });
}

function removeIssueUpvote(id) {
  return db("comments")
    .where({ id })
    .del();
}

function removeCommentUpvote(id) {
  return db("comments")
    .where({ id })
    .del();
}
