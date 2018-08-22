import {merge} from 'lodash';
import mutationResolvers = require('../../resolvers/mutationResolvers');
import {BookInput} from '../input/bookInput';
import {Book} from '../output/book';

let mutationDef = `
    type Mutation {
        updateBook(book: BookInput!): Book 
    }`;

export const Mutation = {
    def: [mutationDef, ...BookInput.def],
    resolvers:{...mutationResolvers}
};