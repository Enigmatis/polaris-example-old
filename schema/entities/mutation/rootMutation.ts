import {merge} from 'lodash';
import {InjectableType} from '@enigmatis/polaris';
import {provide} from "inversify-binding-decorators";
import {MutationResolvers} from '../../resolvers/mutationResolvers';

@provide("InjectableType")
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