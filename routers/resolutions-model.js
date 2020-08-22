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

function findResolutionBy(filter) {
  return db("resolution_votes")
    .where(filter)
}

function findResolutionById(id) {
  return db("resolution_votes")
    .where({ id })
}

function insertResolution(resolution) {
  return db("resolution_votes")
    .insert(resolution)
    .then(newResolutions => {
      console.log(newResolutions);
      const [ newResolution ] = newResolutions;
      return findResolutionById(newResolution)
    })
}