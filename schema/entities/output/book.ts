import {CommonEntities} from '@enigmatis/polaris';
import {merge} from 'lodash';
import Polaris = require('@enigmatis/polaris');

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
import resolvers= require('../../resolvers/bookResolvers');

// Get the Book's mutationResolvers
let BookWrapper = new Polaris.PolarisTypeWrapper([bookDef, ...CommonEntities.commonEntityInterface.typeDefs, ...CommonEntities.upperCaseDirective.typeDefs],
    resolvers, merge(CommonEntities.upperCaseDirective.schemaDirectives));

export {BookWrapper as Book};