const books = [
  {
    title: 'The Awakening',
    description: 'Description for book',
    authorName: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    description: 'Description for book',
    authorName: 'Paul Auster 12345',
  },
];

const getAuthor = (book: any) => {
  return {
    name: book.authorName
  }
}

const resolvers = {
  Query: {
    books: () => books,
  },

  Book: {
    title: (book: any) => `Title book + ${book.title}`,
    author: (book: any) => getAuthor(book)
  }
};

export default resolvers;