import { MiddlewaresConfig, MiddlewaresConfiguration } from '@enigmatis/polaris';
import { injectable } from 'inversify';
import * as headersConfigurationPath from '../../middlewares-configuration.json';

@injectable()
export class ExampleMiddlewaresConfig implements MiddlewaresConfig {
    middlewaresConfiguration: MiddlewaresConfiguration;

    constructor() {
        this.middlewaresConfiguration = {
            allowDataVersionMiddleware: headersConfigurationPath.allowDataVersionMiddleware,
            allowRealityMiddleware: headersConfigurationPath.allowRealityMiddleware,
        };
    }
}
