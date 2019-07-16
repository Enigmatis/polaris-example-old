import { QueryWithIrrelevant } from '@enigmatis/mongo-driver';
import { PolarisContext } from '@enigmatis/polaris';
import { QueryIrrelevantResult } from '@enigmatis/utills';
import { UserInputError } from 'apollo-server-koa';
import { Book, BookModelExecutorPerReality, BookModelPerReality } from '../../dal/book-model';
import { BOOK_UPDATED } from './subscription-event-names';

export const titleResolver = (book: Book) => {
    // if (book.dataVersion !== undefined) {
    //     return book.title + ' (version ' + book.dataVersion + ')';
    // }
    return 'Special Edition: ' + book.title;
};
export const createBookResolver = async (
    parent: object | null,
    { book }: { book: Book },
    context: PolarisContext,
) => {
    const { realityId } = context.headers;
    if (!Number.isInteger(realityId as any)) {
        throw new UserInputError('please provide reality-id header as number');
    } else {
        const result = await BookModelExecutorPerReality.execute(m => m.create(book), context);
        return result;
    }
};

export const createBooksResolver = async (
    parent: object | null,
    { books }: { books: Book[] },
    context: PolarisContext,
) => {
    const { realityId } = context.headers;
    if (!Number.isInteger(realityId as any)) {
        throw new UserInputError('please provide reality-id header as number');
    } else {
        return BookModelPerReality(context).insertMany(books);
    }
};
export const updateBookResolver = async (
    parent: object | null,
    { bookId, update }: { bookId: number; update: Partial<Book> },
    context: PolarisContext,
) => {
    const { realityId } = context.headers;
    if (!Number.isInteger(realityId as any)) {
        throw new UserInputError('please provide reality-id header as number');
    } else {
        // const x: InnerModelType<Book> | null = await BookModelPerReality(context).findByIdAndUpdate(
        //     bookId,
        //     update,
        //     { new: true },
        // );
        // return x;
    }
};
export const bookQueryResolver = async (
    parent: object | null,
    query: object,
    context: PolarisContext,
) => {
    const { realityId } = context.headers;
    if (!Number.isInteger(realityId as any)) {
        throw new UserInputError('please provide reality-id header');
    } else {
        // return BookModelPerReality(context).find({});
        const result = await BookModelExecutorPerReality.execute(model => {
            return model.find({});
        }, context);

        return result;
    }
};
export const bookStartsWithQueryResolver = async (
    parent: object | null,
    query: any,
    context: PolarisContext,
) => {
    const { realityId, dataVersion } = context.headers;
    if (!Number.isInteger(realityId as any)) {
        throw new UserInputError('please provide reality-id header');
    } else {
        const bookModel = BookModelPerReality(context);
        const result = QueryWithIrrelevant(
            bookModel,
            await bookModel.find({
                title: { $regex: '^' + query.startsWith, $options: 'i' },
            }),
            dataVersion,
        );

        return result;
    }
};
export const subscribeResolver = (
    root: any,
    { realityId }: { realityId: number },
    { pubSub, executionMetadata }: PolarisContext,
) => {
    BookModelPerReality({ headers: { realityId } })
        .watch({ fullDocument: 'updateLookup' })
        .on('change', async change => {
            await pubSub!.publish(BOOK_UPDATED, { bookChanged: change.fullDocument });
        });
    return pubSub!.asyncIterator([BOOK_UPDATED]);
};
