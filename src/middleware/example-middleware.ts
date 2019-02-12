import { Middleware, RequestMiddlewareParams, ResponseMiddlewareParams } from '@enigmatis/polaris';
import { injectable } from 'inversify';

@injectable()
export class ExampleMiddleware implements Middleware {
    preResolve({ args }: RequestMiddlewareParams) {
        return;
    }

    postResolve({ result }: ResponseMiddlewareParams): string | null {
        return result;
    }
}
