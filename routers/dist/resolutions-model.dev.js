"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var db = require("../data/db-config");

module.exports = {
  findResolutions: findResolutions,
  findResolutionBy: findResolutionBy,
  findResolutionById: findResolutionById,
  insertResolution: insertResolution
};

function findResolutions() {
  return db("resolution_votes");
}

function findResolutionBy(user_id) {
  return db("resolution_votes").select('issue_id').where({
    user_id: user_id
  });
}

function findResolutionById(id) {
  return db("resolution_votes").where({
    id: id
  });
}

function insertResolution(resolution) {
  return db("resolution_votes").insert(resolution).then(function (newResolutions) {
    console.log("NEW RESOLUTIONS", newResolutions);

    var _newResolutions = _slicedToArray(newResolutions, 1),
        newResolution = _newResolutions[0];

    return findResolutionById(newResolution);
  });
}