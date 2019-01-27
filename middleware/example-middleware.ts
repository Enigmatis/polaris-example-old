import { inject, injectable } from 'inversify';
import { PolarisLogger, PolarisMiddleware } from '@enigmatis/polaris';
import { GraphQLResolveInfo } from 'graphql';
import { POLARIS_TYPES } from '@enigmatis/polaris';

@injectable()
export class ExampleMiddleware implements PolarisMiddleware {
    @inject(POLARIS_TYPES.PolarisLogger) polarisLogger: PolarisLogger;

    preResolve(root: any, args: { [argName: string]: any }, context: any, info: GraphQLResolveInfo) {
        this.polarisLogger.debug(`from example before resolver, args: ${JSON.stringify(args)}`);
    }

    postResolve(root: any, args: { [argName: string]: any }, context: any, info: GraphQLResolveInfo, result: string) {
        this.polarisLogger.debug(`from example after resolver, result: ${JSON.stringify(result)}`);
    }
}