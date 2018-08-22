import "reflect-metadata";
import {InjectableResolver} from '@enigmatis/polaris';
import { provide} from "inversify-binding-decorators";
import {IResolvers} from "graphql-yoga/dist/types";

@provide("InjectableResolver")
class BookResolvers implements InjectableResolver {
    resolver(): IResolvers {
        return {
            Book: {
                title(book) {
                    return "title: " + book.title
                }
            }
        };
    }
}