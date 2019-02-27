import { injectable } from 'inversify';
import * as middlewaresConfigurationPath from '../../middlewares-configuration.json';
import {MiddlewaresConfig, MiddlewaresConfiguration} from "@enigmatis/polaris";

@injectable()
export class ExampleMiddlewaresConfig implements MiddlewaresConfig {
    middlewaresConfiguration: MiddlewaresConfiguration;

    constructor() {
        this.middlewaresConfiguration = {
            allowDataVersionMiddleware: middlewaresConfigurationPath.dataVersion,
            allowRealityMiddleware: middlewaresConfigurationPath.realityId,
        };
    }
}
