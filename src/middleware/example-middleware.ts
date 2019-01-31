import {
    GraphqlLogger,
    MiddlewareParams,
    POLARIS_TYPES,
    PolarisMiddleware,
    PostMiddlewareParams,
} from '@enigmatis/polaris';
import { inject, injectable } from 'inversify';

@injectable()
export class ExampleMiddleware implements PolarisMiddleware {
    @inject(POLARIS_TYPES.GraphqlLogger) logger!: GraphqlLogger;

    preResolve({ args, context }: MiddlewareParams) {
        this.logger.debug(`from example before resolver, args: ${JSON.stringify(args)}`, { context });
    }

    postResolve({ result, context }: PostMiddlewareParams): void {
        this.logger.debug(`from example after resolver, result: ${JSON.stringify(result)}`, { context });
    }
}
