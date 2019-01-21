import {InjectableResolver, POLARIS_TYPES} from '@enigmatis/polaris';
import { provide} from "inversify-binding-decorators";

@provide(POLARIS_TYPES.InjectableResolver)
export class BookResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Book: {
                title(book, _, context) {
                    let headers = context.headers;
                    if (headers.dataVersion !== undefined) {
                        return book.title + ' (version ' + headers.dataVersion + ')';
                    }
                    return 'Special Edition: ' + book.title
                }
            }
        };
    }
} 