const db = require("../data/db-config");

module.exports = {
  findVotes,
  insertUpvote,
  findVoteBy,
  findVotesBy,
  findVoteByIssueId,
  issueVoteById,
  commentVoteById,
  removeIssueUpvote,
  removeCommentUpvote,
  findVoteByIssueId
};

function findVotes() {
  return db("upvotes")
}

function findVotesBy(user_id) {
  return db("upvotes").where({user_id})
}

function insertUpvote(upvote) {
  return db("upvotes")
    .insert(upvote)
    .then(newUpvotes => {
      const [newUpvote] = newUpvotes
      return findVoteBy(newUpvote)
    })
}

function findVoteBy(id) {
  return db("upvotes").where({id})
}

function findVotesByUser(id) {
  return db("upvotes").where({id})
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
