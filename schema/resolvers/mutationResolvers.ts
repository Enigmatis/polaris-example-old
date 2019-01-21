import {InjectableResolver, POLARIS_TYPES} from '@enigmatis/polaris';
import {provide} from "inversify-binding-decorators";

@provide(POLARIS_TYPES.InjectableResolver)
export class MutationResolvers implements InjectableResolver {
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