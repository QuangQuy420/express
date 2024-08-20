const typeDefs = `#graphql
  type Query {
    books: [Book]
  }

  type Book {
    title: String
    description: String
    author: Author
  }

  type Author {
    name: String
  }
`;

export default typeDefs;
