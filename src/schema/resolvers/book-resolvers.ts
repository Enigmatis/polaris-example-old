import { InjectableResolver, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { Book } from '../entities/book';

@provide(POLARIS_TYPES.InjectableResolver)
export class BookResolvers implements InjectableResolver {
    public resolver(): any {
        return {
            Book: {
                title(book: Book, _: any, context: any) {
                    const headers = context.headers;
                    if (headers.dataVersion !== undefined) {
                        return book.title + ' (version ' + headers.dataVersion + ')';
                    }
                    return 'Special Edition: ' + book.title;
                },
            },
        };
    }
}
