import {injectable} from "inversify";
import "reflect-metadata";
import {InjectableType} from "../../ioc/injectableInterfaces";
import { provide} from "inversify-binding-decorators";

@provide("InjectableType")
class Query implements InjectableType {
    definition(): string {
        return `type Query {
                    books: [Book] }`;
    }
}