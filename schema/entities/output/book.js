// Get common entity interface because we use it as an interface
const {CommonEntities} = require('@vulcan/polaris');
const CommonEntityInterface = CommonEntities.commonEntityInterface;

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

// Get the Book's mutationResolvers
const resolvers = require('../../resolvers/bookResolvers');


module.exports = {
    types: [Book, CommonEntityInterface.types], resolvers: resolvers
};