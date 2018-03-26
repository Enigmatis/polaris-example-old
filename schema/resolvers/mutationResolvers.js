const resolvers = {
    Mutation: {
        updateBook(_, {book}) {
            return {id: book.id, title: book.title, author: book.author};
        }
    }

};

module.exports = resolvers;