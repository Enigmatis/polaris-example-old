import {injectable} from "inversify";
import "reflect-metadata";
import {InjectableResolver} from "../../ioc/injectableInterfaces";
import {provide} from "inversify-binding-decorators";

@provide("InjectableResolver")
class MutationResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Mutation: {
                updateBook(_, {book}) {
                    return {id: book.id, title: book.title, author: book.author};
                }
            }

        };
    }
}