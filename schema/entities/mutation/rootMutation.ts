import {merge} from 'lodash';
import mutationResolvers = require('../../resolvers/mutationResolvers');
import {BookInput} from '../input/bookInput';
import {Book} from '../output/book';
import Polaris = require('@enigmatis/polaris');

let mutationDef = `
    type Mutation {
        updateBook(book: BookInput!): Book 
    }`;

let MutationWrapper = new Polaris.PolarisTypeWrapper([mutationDef, ...Book.typeDefs, ...BookInput.typeDefs], merge(mutationResolvers));

export {MutationWrapper as Mutation};