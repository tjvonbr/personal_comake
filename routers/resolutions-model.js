const db = require("../data/db-config");

module.exports = {
  findResolutions,
  findResolutionBy,
  findResolutionById,
  insertResolution
}

function findResolutions() {
  return db("resolution_votes")
}

function findResolutionBy(user_id) {
  return db("resolution_votes")
    .select('issue_id')  
    .where({user_id})
}

function findResolutionById(id) {
  return db("resolution_votes")
    .where({ id })
}

function insertResolution(resolution) {
  return db("resolution_votes")
    .insert(resolution)
    .then(newResolutions => {
      console.log("NEW RESOLUTIONS", newResolutions);
      const [newResolution] = newResolutions;
      return findResolutionById(newResolution)
    })
}