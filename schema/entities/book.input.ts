import "reflect-metadata";
import {InjectableType} from "../../ioc/injectableInterfaces";
import { provide} from "inversify-binding-decorators";

@provide("InjectableType")
class BookInput implements InjectableType {
    definition(): string {
        return `input BookInput{
                    id: ID!        
                    title: String,
                    author: String
                }`;
    }
}