'use strict';

var url = require('url');

var Admissions = require('./AdmissionsService');

module.exports.admissionsGET = function admissionsGET (req, res, next) {
  Admissions.admissionsGET(req.swagger.params, res, next);
};

module.exports.admissionsStatusDescriptorsGET = function admissionsStatusDescriptorsGET (req, res, next) {
  Admissions.admissionsStatusDescriptorsGET(req.swagger.params, res, next);
};

module.exports.admissionsStatusGET = function admissionsStatusGET (req, res, next) {
  Admissions.admissionsStatusGET(req.swagger.params, res, next);
};
