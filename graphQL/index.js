const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};
const graphQlServer = new ApolloServer({ typeDefs, resolvers });

module.exports = graphQlServer;