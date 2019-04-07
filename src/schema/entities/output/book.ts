import { InjectableType, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';

@provide(POLARIS_TYPES.InjectableType)
export class Book implements InjectableType {
    definition = `
             type Book implements CommonEntity {
                 id: ID!
                 creationDate: String,
                 lastUpdateDate: String,
                 dataVersion: Int!,
                 title: String,
                 author: String,
                 otherBook: Book,
                 realityId: Int!
             }
         `;
}
