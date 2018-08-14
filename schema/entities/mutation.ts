import {injectable} from "inversify";
import "reflect-metadata";
import {InjectableType} from "../../ioc/injectableInterfaces";
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