import { InjectableType, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';

@provide(POLARIS_TYPES.InjectableType)
export class BookInput implements InjectableType {
    public definition(): string {
        return `input BookInput{
                     id: ID!        
                     title: String,
                     author: String
                 }`;
    }
}
