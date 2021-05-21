/**
 * a very simple server that implements the methods necessary
 * for retrieving the current amount of stargazers for a
 * GitHub repository
 */

const grpc = require("@grpc/grpc-js");
const fetch = require("node-fetch");

const { GithubStarsService, StarsReply } = require("../service");

/**
 * implement the method that handles retrieving the stargazers!
 */
const getStars = async (call, callback) => {
  // retrieve the username and repository that was sent
  const username = call.request.getUsername();
  const repository = call.request.getRepository();

  // use a basic fetch(..) against the public github api
  const res = await fetch(
    `https://api.github.com/repos/${username}/${repository}`
  );

  const json = await res.json();

  // create a new reply object
  const reply = new StarsReply();

  reply.setStars(json.stargazers_count);

  callback(null, reply);
};

/**
 * creates the server and adds the "getStars" request handler
 */
const createServer = () => {
  const server = new grpc.Server();

  server.addService(GithubStarsService, {
    getStars,
  });

  return server;
};

const server = createServer();

const PORT = 50051;

// bind the server locally
server.bindAsync(
  "0.0.0.0:50051",
  // indicate no credentials are being used
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
    console.log("🚀 Server started on 50051");
  }
);
