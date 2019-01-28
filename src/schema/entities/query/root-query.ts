import { InjectableType, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';

@provide(POLARIS_TYPES.InjectableType)
export class Query implements InjectableType {
    definition(): string {
        return `type Query {
                    books: [Book] }`;
    }
}
