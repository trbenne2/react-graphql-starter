import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

// after graphql created import it
const server = new GraphQLServer({
  typeDefs: './app.graphql',
  resolvers
});

server.start(() => console.log('Sever is running on localhost: 4000'));
