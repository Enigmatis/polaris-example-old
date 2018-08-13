let resolvers = {
    Book: {
        title(book){
            return "title: " + book.title
        }
    }
};

export = resolvers;