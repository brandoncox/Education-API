'use strict';

exports.studentsIdAcademic_statusGET = function(args, res, next) {
  /**
   * Find Student Academic Status by ID
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "major" : "aeiou",
  "last_name" : "aeiou",
  "first_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.studentsIdAffiliationsGET = function(args, res, next) {
  /**
   * Find Student Affiliations by ID
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "major" : "aeiou",
  "last_name" : "aeiou",
  "first_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.studentsIdAllGET = function(args, res, next) {
  /**
   * Get all core data about a student
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "major" : "aeiou",
  "last_name" : "aeiou",
  "first_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.studentsIdContactsGET = function(args, res, next) {
  /**
   * Find Student Contacts by ID
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "major" : "aeiou",
  "last_name" : "aeiou",
  "first_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.studentsIdDemographicGET = function(args, res, next) {
  /**
   * Find Student demographic information (contacts, address, phone etc) by ID
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "major" : "aeiou",
  "last_name" : "aeiou",
  "first_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.studentsIdDobGET = function(args, res, next) {
  /**
   * Find Student date of birth by ID
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "major" : "aeiou",
  "last_name" : "aeiou",
  "first_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.studentsIdGET = function(args, res, next) {
  /**
   * Find Student by ID
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "major" : "aeiou",
  "last_name" : "aeiou",
  "first_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.studentsIdGenderGET = function(args, res, next) {
  /**
   * Find Student gender by ID
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "major" : "aeiou",
  "last_name" : "aeiou",
  "first_name" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

