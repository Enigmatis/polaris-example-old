import {inject, injectable} from "inversify";
import {PolarisLogger} from "@enigmatis/polaris-logs/dist/src/polaris-logger";
import {InjectableLogger, PolarisMiddleware} from "@enigmatis/polaris";

@injectable()
export class ExampleMiddleware implements PolarisMiddleware{
    @inject("InjectableLogger") polarisLogger: InjectableLogger;

    preResolve(resolve, root, args, context, info) {
        this.polarisLogger.info(`from example before resolver, args: ${JSON.stringify(args)}`);
    }

    postResolve(root: any, args: any, context: any, info: any, result) {
        this.polarisLogger.info(`from example after resolver, result: ${JSON.stringify(result)}`);
    }
}