'use strict';

exports.admissionsGET = function(args, res, next) {
  /**
   * Get Admissions
   * Allows submission of admission applications from local reading and scoring systems to the main campus SIS 
   *
   * student_id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "image" : "aeiou",
  "product_id" : "aeiou",
  "description" : "aeiou",
  "display_name" : "aeiou",
  "capacity" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.admissionsStatusDescriptorsGET = function(args, res, next) {
  /**
   * Time Estimates
   * Returns field names and the canonical coded values and descriptions allowed for them, in the format of the Common/FieldValueList EDO described on
   *
   * customer_uuid UUID Unique customer identifier to be used for experience customization. (optional)
   * product_id String Unique identifier representing a specific product for a given latitude & longitude. (optional)
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "image" : "aeiou",
  "product_id" : "aeiou",
  "description" : "aeiou",
  "display_name" : "aeiou",
  "capacity" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.admissionsStatusGET = function(args, res, next) {
  /**
   * Get Admission Status
   * Given a \"sis-application-id\" or other id, returns the status of all admission applications assigned to that applicant, in the format of the Student/Admission Application Response EDO described on 
   *
   * student_id Double Student Identifier
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "high_estimate" : 1.3579000000000001069366817318950779736042022705078125,
  "product_id" : "aeiou",
  "low_estimate" : 1.3579000000000001069366817318950779736042022705078125,
  "surge_multiplier" : 1.3579000000000001069366817318950779736042022705078125,
  "estimate" : "aeiou",
  "display_name" : "aeiou",
  "currency_code" : "aeiou"
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

