import { InjectableResolver, POLARIS_TYPES, PolarisContext } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { Book } from '../entities/book';
import { BookModelPerReality } from '../../dal/book-model';
import { UserInputError } from 'apollo-server-koa';

@provide(POLARIS_TYPES.InjectableResolver)
export class MutationResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Mutation: {
                createBook: createBookResolver,
                updateBook: updateBookResolver,
            },
        };
    }
}

const createBookResolver = async (parent: object | null, { book }: { book: Book }, context: PolarisContext) => {
    const { realityId } = context.headers;
    if (typeof realityId !== 'number') {
        throw new UserInputError('please provide reality-id header as number');
    } else {
        return await BookModelPerReality(context).create(book);
    }
};

const updateBookResolver = async (parent: object | null, { bookId, update }: { bookId: number, update: Partial<Book> }, context: PolarisContext) => {
    const { realityId } = context.headers;
    if (typeof realityId !== 'number') {
        throw new UserInputError('please provide reality-id header as number');
    } else {
        return await BookModelPerReality(context).findByIdAndUpdate(bookId, update, { new: true });
    }
};
