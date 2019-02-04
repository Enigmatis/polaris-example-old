import {InjectableResolver, POLARIS_TYPES} from '@enigmatis/polaris';
import {provide} from 'inversify-binding-decorators';
import {Book} from "../entities/book";

const bible: Book = {
    id: '3',
    title: 'the bible',
    author: 'god',
    dataVersion: 2,
    realityId: '0',
    creationDate: '1.1.1',
    lastUpdateDate: '12.1.12',
    deleted: false
};
const jurassicPark: Book = {
    id: '2',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    dataVersion: 2,
    realityId: '1',
    creationDate: '1.1.1',
    lastUpdateDate: '12.1.12',
    otherBook: bible,
    deleted: false
};
const harryPotter :Book= {
    id: '1',
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
    dataVersion: 5,
    otherBook: bible,
    creationDate: '1.1.1',
    lastUpdateDate: '12.1.12',
    realityId:'2',
    deleted:false
};
const www :Book= {
    id: '5',
    title: "w",
    author: 'k',
    dataVersion: 4,
    otherBook: jurassicPark,
    creationDate: '1.1.1',
    lastUpdateDate: '12.1.12',
    realityId:'2',
    deleted:false
};

const books: Book[] = [
    harryPotter,
    jurassicPark,
    bible,
    www
];

@provide(POLARIS_TYPES.InjectableResolver)
export class QueryResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Query: {books: () => books},
        };
    }
}
