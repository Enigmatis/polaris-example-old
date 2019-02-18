import { InjectableResolver, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { BookRepository } from '../../dal/book-repository';
import { Book } from '../entities/book';

@provide(POLARIS_TYPES.InjectableResolver)
export class QueryResolvers implements InjectableResolver {
    bookRepository: BookRepository;

    constructor() {
        this.bookRepository = new BookRepository();
    }

    resolver(): any {
        return {
            Query: {
                books: async (
                    parent: object | null,
                    {
                        realityId,
                        includeOperational,
                    }: { realityId: number; includeOperational: boolean },
                ) => this.bookRepository.findAll(realityId, includeOperational),
            },
        };
    }
}
