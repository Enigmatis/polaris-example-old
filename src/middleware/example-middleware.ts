import {
    POLARIS_TYPES,
    PolarisLogger,
    PolarisMiddleware,
    RequestMiddlewareParams,
    ResponseMiddlewareParams,
} from '@enigmatis/polaris';
import {GraphQLResolveInfo} from 'graphql';
import { inject, injectable } from 'inversify';

@injectable()
export class ExampleMiddleware implements PolarisMiddleware {
    @inject(POLARIS_TYPES.PolarisLogger) polarisLogger!: PolarisLogger;

    preResolve({ args }: RequestMiddlewareParams) {
        this.polarisLogger.debug(`from example before resolver, args: ${JSON.stringify(args)}`);
    }

    postResolve({ result }: ResponseMiddlewareParams): string | null{
        this.polarisLogger.debug(`from example after resolver, result: ${JSON.stringify(result)}`);
        return result;
    }

}
