let resolvers = {
    Book: {
        title(book, _, context) {
            if (context.edition) {
                return context.edition + ': ' + book.title;
            }
            return 'Special Edition: ' + book.title
        }
    }
};

export = resolvers;