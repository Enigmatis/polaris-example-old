import { QueryWithIrrelevant } from '@enigmatis/mongo-driver';
import { PolarisContext } from '@enigmatis/polaris';
import { QueryIrrelevantResult } from '@enigmatis/utills';
import { UserInputError } from 'apollo-server-koa';
import { BookModelPerReality } from '../../dal/book-model';
import { Book } from '../definitions/generated-types';
import { BOOK_UPDATED } from './subscription-event-names';

export const titleResolver = (book: Book) => {
    if (book.dataVersion !== undefined) {
        return book.title + ' (version ' + book.dataVersion + ')';
    }
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
        return BookModelPerReality(context).create(book);
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
        return BookModelPerReality(context).findByIdAndUpdate(bookId, update, { new: true });
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
        return BookModelPerReality(context).find({}).lean();
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
        return QueryWithIrrelevant(
            bookModel,
            await bookModel.find({
                title: { $regex: '^' + query.startsWith, $options: 'i' },
            }),
            dataVersion,
        );
    }
};
export const subscribeResolver = (
    root: any,
    { realityId }: { realityId: number },
    { pubSub }: PolarisContext,
) => {
    BookModelPerReality({ headers: { realityId } })
        .watch({ fullDocument: 'updateLookup' })
        .on('change', async change => {
            await pubSub!.publish(BOOK_UPDATED, { bookChanged: change.fullDocument });
        });
    return pubSub!.asyncIterator([BOOK_UPDATED]);
};
