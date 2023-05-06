const config = require("./config");
const app = require("./app");
const graphQlServer = require("./graphQL");
const port = config.get("port");

graphQlServer.start().then((res) => {
 graphQlServer.applyMiddleware({ app, path: "/graphql" });
 app.listen({ port }, () =>
  console.log(
   `🚀 Server ready at http://localhost:ocalhost:${port}${graphQlServer.graphqlPath}`
  )
 );
});