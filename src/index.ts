import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const products = [
  {
    image: '',
    name: 'Apple',
    price: 0.99,
  },
  {
    image: '',
    name: 'Orange',
    price: 1.49,
  },
];

const typeDefs = `#graphql
  type Product {
    image: String
    name: String
    price: Float
  }

  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
