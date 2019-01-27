import { POLARIS_TYPES, PolarisLogger, PolarisMiddleware } from '@enigmatis/polaris';
import { GraphQLResolveInfo } from 'graphql';
import { inject, injectable } from 'inversify';

@injectable()
export class ExampleMiddleware implements PolarisMiddleware {
    @inject(POLARIS_TYPES.PolarisLogger) public polarisLogger!: PolarisLogger;

    public preResolve(
        root: any,
        args: { [argName: string]: any },
        context: any,
        info: GraphQLResolveInfo,
    ) {
        this.polarisLogger.debug(`from example before resolver, args: ${JSON.stringify(args)}`);
    }

    public postResolve(
        root: any,
        args: { [argName: string]: any },
        context: any,
        info: GraphQLResolveInfo,
        result: string,
    ) {
        this.polarisLogger.debug(`from example after resolver, result: ${JSON.stringify(result)}`);
    }
}
