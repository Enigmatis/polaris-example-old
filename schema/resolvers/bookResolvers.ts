let resolvers = {
    Book: {
        title(book, _, context) {
            let headers = context.headers;
            if (headers.dataVersion !== undefined) {
                return book.title + ' (version ' + headers.dataVersion + ')';
            }
            return 'Special Edition: ' + book.title
        }
    }
};

export = resolvers;