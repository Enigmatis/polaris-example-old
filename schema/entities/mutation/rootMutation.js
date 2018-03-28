const {merge} = require('lodash');
const mutationResolvers = require('../../resolvers/mutationResolvers');
const BookInput = require('../input/bookInput');
const Book = require('../output/book');

const Mutation = `
    type Mutation {
        updateBook(book: BookInput!): Book 
    }`;

module.exports = {
    // Combine the Query type schema with the Book types schema because we use it in the Query type
    typeDefs: [Mutation, ...Book.typeDefs, ...BookInput.typeDefs],
    // Combine the Query mutationResolvers with the Book mutationResolvers
    resolvers: merge(mutationResolvers)
};