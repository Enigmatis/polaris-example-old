import {CommonEntityInterface, InjectableResolver, POLARIS_TYPES} from '@enigmatis/polaris';
import {provide} from "inversify-binding-decorators";

let books = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
        otherBook:{
            id: 2,
            title: 'Jurassic Park',
            author: 'Michael Crichton',
            creationDate: 'String',
            lastUpdateDate: 'String',
            dataVersion: 5
        },
        creationDate: 'String',
        lastUpdateDate: 'String',
        dataVersion: 2

    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',

        creationDate: 'String',
        lastUpdateDate: 'String',
        dataVersion: 5
    },
];

@provide(POLARIS_TYPES.InjectableResolver)
export class QueryResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Query: {books: () => books},
        };
    }
}