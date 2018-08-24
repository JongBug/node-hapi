const Hapi = require("hapi");

const server = new Hapi.Server({ port: 8000, host: "localhost" });

server.route({
  method: "GET",
  path: "/",
  handler: (request, reply) => {
    return "<h1>hello world</h1>";
  }
});

server.route({
  method: "GET",
  path: "/user/{name}",
  handler: (request, reply) => {
    return "<h1>hello world</h1> " + request.params.name;
  }
});

server.start(err => {
  if (err) {
    throw err;
  }
  console.log("Server Start LOKOOO: ${server.info.uri}");
});
