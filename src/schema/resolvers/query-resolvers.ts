import { InjectableResolver, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { BookRepository } from '../../dal/book-repository';
import { Book } from '../entities/book';
import { BookModelPerReality } from '../../dal/book-model';

@provide(POLARIS_TYPES.InjectableResolver)
export class QueryResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Query: {
                books: async (
                    parent: object | null,
                    {
                        realityId,
                        includeOperational,
                    }: { realityId: number; includeOperational: boolean },
                ) => BookModelPerReality(realityId).find({}),
            },
        };
    }
}
