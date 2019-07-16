import {
    bookQueryResolver,
    bookStartsWithQueryResolver,
    createBookResolver,
    createBooksResolver,
    subscribeResolver,
    titleResolver,
    updateBookResolver,
} from './book-resolvers-functions';

export const resolvers = {
    Book: {
        title: titleResolver,
    },
    Query: {
        books: bookQueryResolver,
        booksStartsWith: bookStartsWithQueryResolver,
    },
    Mutation: {
        createBook: createBookResolver,
        createBooks: createBooksResolver,
        updateBook: updateBookResolver,
    },
    Subscription: {
        bookChanged: {
            subscribe: subscribeResolver,
        },
    },
};
