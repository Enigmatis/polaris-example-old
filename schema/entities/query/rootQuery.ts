// Get the Query's mutationResolvers
import  {QueryResolvers} from '../../resolvers/queryResolvers';
import {InjectableType} from '@enigmatis/polaris';
import {provide} from "inversify-binding-decorators";

@provide("InjectableType")
export class Query implements InjectableType {
    definition(): string {
        return `type Query {
                    books: [Book] }`;
    }
    resolvers(): any {
        QueryResolvers
    }
}