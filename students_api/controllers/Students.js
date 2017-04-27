'use strict';

var url = require('url');

var Students = require('./StudentsService');

module.exports.studentsIdAcademic_statusGET = function studentsIdAcademic_statusGET (req, res, next) {
  Students.studentsIdAcademic_statusGET(req.swagger.params, res, next);
};

module.exports.studentsIdAffiliationsGET = function studentsIdAffiliationsGET (req, res, next) {
  Students.studentsIdAffiliationsGET(req.swagger.params, res, next);
};

module.exports.studentsIdAllGET = function studentsIdAllGET (req, res, next) {
  Students.studentsIdAllGET(req.swagger.params, res, next);
};

module.exports.studentsIdContactsGET = function studentsIdContactsGET (req, res, next) {
  Students.studentsIdContactsGET(req.swagger.params, res, next);
};

module.exports.studentsIdDemographicGET = function studentsIdDemographicGET (req, res, next) {
  Students.studentsIdDemographicGET(req.swagger.params, res, next);
};

module.exports.studentsIdDobGET = function studentsIdDobGET (req, res, next) {
  Students.studentsIdDobGET(req.swagger.params, res, next);
};

module.exports.studentsIdGET = function studentsIdGET (req, res, next) {
  Students.studentsIdGET(req.swagger.params, res, next);
};

module.exports.studentsIdGenderGET = function studentsIdGenderGET (req, res, next) {
  Students.studentsIdGenderGET(req.swagger.params, res, next);
};
