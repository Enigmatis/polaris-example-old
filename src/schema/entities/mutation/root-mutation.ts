import { InjectableType, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';

@provide(POLARIS_TYPES.InjectableType)
export class Mutation implements InjectableType {
    public definition(): string {
        return `
             type Mutation {
                 updateBook(book: BookInput!): Book 
             }`;
    }
}
