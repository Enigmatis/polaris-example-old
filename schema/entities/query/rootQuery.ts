// We use book in our Query object
import Polaris = require('@enigmatis/polaris');
import {Book} from '../output/book';
import {merge} from 'lodash';
import {CommonEntities}  from '@enigmatis/polaris';

// Get the Query's mutationResolvers
import  resolvers = require('../../resolvers/queryResolvers');


// Create the type Query's schema
let queryDef = `type Query {
 books: [Book] @connection }`;

let QueryWrapper = new Polaris.PolarisTypeWrapper([queryDef, ...Book.typeDefs, ...CommonEntities.connectionDirective.typeDefs], merge(resolvers, Book.resolvers),
    merge(Book.schemaDirectives, CommonEntities.connectionDirective.schemaDirectives));

export {QueryWrapper as Query};