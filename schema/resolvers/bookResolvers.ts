let resolvers = {
    Book: {
        title(book) {
            return 'Special Edition: ' + book.title
        }
    }
};

export = resolvers;