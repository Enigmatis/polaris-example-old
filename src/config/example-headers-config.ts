import {HeaderConfig, HeadersConfiguration} from '@enigmatis/polaris';
import {injectable} from 'inversify';
import * as headersConfigurationPath from '../../headers-configuration.json';

@injectable()
export class ExampleHeadersConfig implements HeaderConfig {

    headersConfiguration: HeadersConfiguration;

    constructor() {
        this.headersConfiguration = {
            dataVersion: headersConfigurationPath.dataVersion,
            realityId: headersConfigurationPath.realityId
        };
    }
}