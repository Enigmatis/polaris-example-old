 import {merge} from 'lodash';
import {InjectableType, POLARIS_TYPES} from '@enigmatis/polaris';
import {provide} from "inversify-binding-decorators";
import {MutationResolvers} from '../../resolvers/mutationResolvers';

@provide(POLARIS_TYPES.InjectableType)
export class Mutation implements InjectableType {
    definition(): string {
        return `
             type Mutation {
                 updateBook(book: BookInput!): Book 
             }`;
    }
    resolvers(): any {
        MutationResolvers
    }
}