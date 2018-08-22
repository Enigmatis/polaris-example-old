// We use book in our Query object
import {Book} from '../output/book';
import {merge} from 'lodash';

// Get the Query's mutationResolvers
import  resolvers = require('../../resolvers/queryResolvers');


// Create the type Query's schema
let queryDef = `type Query {
 books: [Book] @connection }`;

export const Query = {
    def: [queryDef, ...Book.def],
    resolvers: {...resolvers, ...Book.resolvers}
};