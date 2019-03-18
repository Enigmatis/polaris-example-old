import { InjectableResolver, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { InnerModelType } from '../../../../mongo-driver/src/types';
import { Book, BookModelPerReality } from '../../dal/book-model';
import { QueryWithIrrelevant } from '../../dal/irr-helper';

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
                booksStartWith: async (
                    parent: object | null,
                    {
                        realityId,
                        startsWith,
                        includeOperational,
                    }: { realityId: number; startsWith: string; includeOperational: boolean },
                ) =>
                    QueryWithIrrelevant<Book>(
                        BookModelPerReality(realityId),
                        await BookModelPerReality(realityId).find({ title: '/^m/' }),
                    ),
            },
        };
    }
}
