import {
    POLARIS_TYPES,
    PolarisLogger,
    PolarisMiddleware,
    RequestMiddlewareParams,
    ResponseMiddlewareParams,
    GraphqlLogger
} from '@enigmatis/polaris';
import { inject, injectable } from 'inversify';

@injectable()
export class ExampleMiddleware implements PolarisMiddleware {

    preResolve({ args }: RequestMiddlewareParams) {
    }

    postResolve({ result }: ResponseMiddlewareParams): string | null{
        return null;
    }

}
