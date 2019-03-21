import { InjectableResolver, POLARIS_TYPES, PolarisContext } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';
import { BOOK_UPDATED } from './event-names';
import { BookModelPerReality } from '../../../dal/book-model';

@provide(POLARIS_TYPES.InjectableResolver)
export class SubscriptionResolver implements InjectableResolver {
    resolver() {
        return {
            Subscription: {
                bookChanged: {
                    subscribe: (root: any, { realityId }: { realityId: number }, { pubSub }: PolarisContext) => {
                        BookModelPerReality({ headers: { realityId } }).watch({ fullDocument: 'updateLookup' }).on('change', async change => {
                            await pubSub!.publish(BOOK_UPDATED, { bookChanged: change.fullDocument });
                        });
                        return pubSub!.asyncIterator([BOOK_UPDATED]);
                    },
                },
            },
        };
    };
}