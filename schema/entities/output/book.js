const {CommonEntities: {commonEntityInterface}} = require('@vulcan/polaris');
const {CommonDirectives: {upperCaseDirective}} = require('@vulcan/polaris');

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
    types: [Book, commonEntityInterface.types, upperCaseDirective.types],
    resolvers: resolvers,
    directives: upperCaseDirective.directive
};