import "reflect-metadata";
import {InjectableResolver} from "../../ioc/injectableInterfaces";
import { provide} from "inversify-binding-decorators";

let books = [
    {
        id: 1,
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        id: 2,
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

@provide("InjectableResolver")
class QueryResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Query: {books: () => books},
        };
    }
}