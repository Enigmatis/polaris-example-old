import {InjectableType, POLARIS_TYPES} from '@enigmatis/polaris';
import {provide} from "inversify-binding-decorators";
import {BookResolvers} from '../../resolvers/bookResolvers';
import {merge} from 'lodash';

@provide(POLARIS_TYPES.InjectableType)
export class Book implements InjectableType {
    definition(): string {
        return `
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
    }
    resolvers(): any{
        BookResolvers
    }
}