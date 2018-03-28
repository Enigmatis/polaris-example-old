const {CommonEntities: {commonEntityInterface, upperCaseDirective}} = require('@vulcan/polaris');

// Define the Book type schema
const Book = `
    type Book implements CommonEntity {
        id: ID!
        creationDate: String,
        lastUpdateDate: String,
        dataVersion: Int!,
        title: String @upper,
        author: String
    }
`;

// Get the Book's mutationResolvers
const resolvers = require('../../resolvers/bookResolvers');

module.exports = {
    typeDefs: [Book, commonEntityInterface.typeDefs, upperCaseDirective.typeDefs],
    resolvers: resolvers,
    schemaDirectives: upperCaseDirective.schemaDirectives
};