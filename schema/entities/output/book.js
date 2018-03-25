// Get common entity interface because we use it as an interface
const CommonEntity = require('./../../common/common-entity');
// Define the Book type schema
const Book = `
    type Book implements CommonEntity {
        id: ID!
        creationDate: String,
        lastUpdateDate: String,
        dataVersion: Int!,
        title: String,
        author: String
    }
`;
// Get the Book's resolvers
const resolvers = require('../../resolvers/bookResolvers');


module.exports = {
    types: [Book, CommonEntity.types], resolvers: resolvers
};