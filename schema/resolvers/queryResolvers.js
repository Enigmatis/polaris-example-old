const books = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

const resolvers = {
    Query: {books: () => books},
};
module.exports = resolvers;