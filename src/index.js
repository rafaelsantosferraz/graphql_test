import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers, context, dataSources } from "./graphql/schema.js";


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    dataSources
});

server.listen(4000).then(({url}) => {
  console.log(`Server listen on ${url}`);
});