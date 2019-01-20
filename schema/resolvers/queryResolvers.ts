import {InjectableResolver} from '@enigmatis/polaris';
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
        }
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

@provide("InjectableResolver")
export class QueryResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Query: {books: () => books},
        };
    }
}