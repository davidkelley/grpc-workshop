// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var service_pb = require('./service_pb.js');

function serialize_example_StarsReply(arg) {
  if (!(arg instanceof service_pb.StarsReply)) {
    throw new Error('Expected argument of type example.StarsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_StarsReply(buffer_arg) {
  return service_pb.StarsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_StarsRequest(arg) {
  if (!(arg instanceof service_pb.StarsRequest)) {
    throw new Error('Expected argument of type example.StarsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_StarsRequest(buffer_arg) {
  return service_pb.StarsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GithubStarsService = exports.GithubStarsService = {
  // retrieves stars
getStars: {
    path: '/example.GithubStars/GetStars',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.StarsRequest,
    responseType: service_pb.StarsReply,
    requestSerialize: serialize_example_StarsRequest,
    requestDeserialize: deserialize_example_StarsRequest,
    responseSerialize: serialize_example_StarsReply,
    responseDeserialize: deserialize_example_StarsReply,
  },
};

exports.GithubStarsClient = grpc.makeGenericClientConstructor(GithubStarsService);
