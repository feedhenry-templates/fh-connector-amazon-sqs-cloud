/*
  Returns a list of your queues
 */
exports.sqs = function(params, cb){
  var AWS = require('aws-sdk');
  var sqs = new AWS.SQS();
  sqs.listQueues(params, function (err, data) {
    if (err) {
      console.log(err); // an error occurred
    } else {
      console.log(data); // successful response
    }
  });
};
