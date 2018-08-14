import "reflect-metadata";
import {InjectableType} from "../../ioc/injectableInterfaces";
import { provide} from "inversify-binding-decorators";

@provide("InjectableType")
class Book implements InjectableType {
    definition(): string {
        return `
            type Book {
                id: ID!
                creationDate: String,
                lastUpdateDate: String,
                dataVersion: Int!,
                title: String @upper,
                author: String,
                otherBook: Book
            }
        `;
    }
}
