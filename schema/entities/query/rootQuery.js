// We use book in our Query object
const Book = require('./../output/book');
const {merge} = require('lodash');
// Get the Query's mutationResolvers
const resolvers = require('../../resolvers/queryResolvers');
// Create the type Query's schema
const Query = `type Query { books: [Book] }`;

module.exports = {
    // Combine the Query type schema with the Book types schema because we use it in the Query type
    types: [Query, ...Book.types],
    // Combine the Query mutationResolvers with the Book mutationResolvers
    resolvers: merge(resolvers, Book.resolvers)
};