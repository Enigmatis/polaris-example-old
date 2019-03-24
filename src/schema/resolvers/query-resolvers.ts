import { QueryWithIrrelevant } from '@enigmatis/mongo-driver';
import { InjectableResolver, POLARIS_TYPES, PolarisContext } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { Book, BookModelPerReality } from '../../dal/book-model';

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
                    context: PolarisContext,
                ) =>
                    QueryWithIrrelevant<Book>(
                        BookModelPerReality(realityId),
                        await BookModelPerReality(realityId).find({
                            title: { $regex: '^' + startsWith, $options: 'i' },
                        }),
                        context.headers.dataVersion,
                    ),
            },
        };
    }
}
