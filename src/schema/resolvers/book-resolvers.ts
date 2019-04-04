import {
    bookQueryResolver,
    bookStartsWithQueryResolver,
    createBookResolver,
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
        updateBook: updateBookResolver,
    },
    Subscription: {
        bookChanged: {
            subscribe: subscribeResolver,
        },
    },
};
