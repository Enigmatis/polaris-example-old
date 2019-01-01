import {InjectableType} from '@enigmatis/polaris';
import {provide} from "inversify-binding-decorators";

@provide("InjectableType")
export class BookInput implements InjectableType {
    definition(): string {
        return `input BookInput{
                     id: ID!        
                     title: String,
                     author: String
                 }`;
    }
}