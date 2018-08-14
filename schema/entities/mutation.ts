import "reflect-metadata";
import {InjectableType} from '@enigmatis/polaris';
import {provide} from "inversify-binding-decorators";

@provide("InjectableType")
class Mutation implements InjectableType {
    definition(): string {
        return `
            type Mutation {
                updateBook(book: BookInput!): Book 
            }`;
    }
}