let resolvers = {
    Book: {
        title(book, _, context) {
            if (context.headers.edition) {
                return context.headers.edition + ': ' + book.title;
            }
            return 'Special Edition: ' + book.title
        }
    }
};

export = resolvers;