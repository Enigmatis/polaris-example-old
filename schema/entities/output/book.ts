import {CommonEntities} from '@enigmatis/polaris';
import {merge} from 'lodash';

// Define the Book type schema
let bookDef = `
    type Book implements CommonEntity {
        id: ID!
        creationDate: String,
        lastUpdateDate: String,
        dataVersion: Int!,
        title: String @upper,
        author: String,
        otherBook: Book
    }
`;
import resolvers = require('../../resolvers/bookResolvers');

export const Book = {
    def: [bookDef],
    resolvers: resolvers
};