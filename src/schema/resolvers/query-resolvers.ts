import { InjectableResolver, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';

const books = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
        otherBook: {
            id: 2,
            title: 'Jurassic Park',
            author: 'Michael Crichton',
        },
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

@provide(POLARIS_TYPES.InjectableResolver)
export class QueryResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Query: { books: () => books },
        };
    }
}
