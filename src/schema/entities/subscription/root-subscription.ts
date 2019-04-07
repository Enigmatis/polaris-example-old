import {InjectableType, POLARIS_TYPES} from "@enigmatis/polaris";
import { provide } from 'inversify-binding-decorators';

@provide(POLARIS_TYPES.InjectableType)
export class Subscription implements InjectableType {
    definition = `
             type Subscription {
                bookChanged(realityId:Int!): Book
            }`;
}
