import "reflect-metadata";
import {InjectableResolver} from '@enigmatis/polaris';
import { provide} from "inversify-binding-decorators";

@provide("InjectableResolver")
class BookResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Book: {
                title(book) {
                    return "title: " + book.title
                }
            }
        };
    }
}