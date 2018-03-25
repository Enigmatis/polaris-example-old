const resolvers = {
    Book: {
        title(book){
            return "title: " + book.title
        }
    }
};

module.exports = resolvers;