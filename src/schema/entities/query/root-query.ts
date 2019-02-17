import { InjectableType, POLARIS_TYPES } from '@enigmatis/polaris';
import { provide } from 'inversify-binding-decorators';

@provide(POLARIS_TYPES.InjectableType)
export class Query implements InjectableType {
    definition = `type Query {
                    books(realityId:Int!, includeOperational:Boolean): [Book] 
                    }`;
}
