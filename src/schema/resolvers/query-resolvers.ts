import { InjectableResolver, POLARIS_TYPES, PolarisContext } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { BookModelPerReality } from '../../dal/book-model';
import { UserInputError } from 'apollo-server-koa';

@provide(POLARIS_TYPES.InjectableResolver)
export class QueryResolvers implements InjectableResolver {
    resolver(): any {
        return {
            Query: {
                books: bookQueryResolver,
            },
        };
    }
}

const bookQueryResolver = async (
    parent: object | null,
    query: object,
    context: PolarisContext,
) => {
    const { realityId } = context.headers;
    if (typeof realityId !== 'number') {
        throw new UserInputError('please provide reality-id header');
    } else {
        return await BookModelPerReality(context).find({});
    }
};
