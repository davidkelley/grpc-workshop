/**
 * A simple client that requests the amount of stargazers for a
 * GitHub repository.
 */
const grpc = require("@grpc/grpc-js");

// lets require the client from the compiled service
const { GithubStarsClient, StarsRequest } = require("../service");

// create the client and connect locally
const client = new GithubStarsClient(
  "0.0.0.0:50051",
  // indicate no credentials are being used
  grpc.credentials.createInsecure()
);

// lets create the request
const request = new StarsRequest();

// request the stars for the "facebook/react" repository
request.setUsername("facebook");
request.setRepository("react");

// get the stars!
client.getStars(request, (err, resp) => {
  if (err) {
    throw err;
  }
  console.log(JSON.stringify(resp.getStars(), null, "  "));
});
