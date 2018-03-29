// We use book in our Query object
const Book = require('./../output/book');
const {merge} = require('lodash');
const {CommonEntities: {connectionDirective}} = require('@vulcan/polaris');
// Get the Query's mutationResolvers
const resolvers = require('../../resolvers/queryResolvers');
// Create the type Query's schema
const Query = `type Query {
 books: [Book] @connection }`;

module.exports = {
    // Combine the Query type schema with the Book types schema because we use it in the Query type
    typeDefs: [Query, ...Book.typeDefs, ...connectionDirective.typeDefs],
    // Combine the Query mutationResolvers with the Book mutationResolvers
    resolvers: merge(resolvers, Book.resolvers),
    schemaDirectives: merge(Book.schemaDirectives, connectionDirective.schemaDirectives)
};