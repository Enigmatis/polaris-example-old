import { InjectableResolver, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { Book } from '../entities/book';

@provide(POLARIS_TYPES.InjectableResolver)
export class BookResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Book: {
                title(book: Book) {
                    if (book.dataVersion !== undefined) {
                        return book.title + ' (version ' + book.dataVersion + ')';
                    }
                    return 'Special Edition: ' + book.title;
                },
            },
        };
    }
}
