import { MiddlewaresConfig, MiddlewaresConfiguration } from '@enigmatis/polaris';
import { injectable } from 'inversify';
import * as middlewaresConfiguration from '../../middlewares-configuration.json';

@injectable()
export class ExampleMiddlewaresConfig implements MiddlewaresConfig {
    middlewaresConfiguration: MiddlewaresConfiguration;

    constructor() {
        this.middlewaresConfiguration = {
            allowDataVersionMiddleware: middlewaresConfiguration.allowDataVersionMiddleware,
            allowRealityMiddleware: middlewaresConfiguration.allowRealityMiddleware,
        };
    }
}
