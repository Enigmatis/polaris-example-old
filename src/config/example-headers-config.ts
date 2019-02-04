import {HeaderConfig, HeadersConfiguration} from '@enigmatis/polaris';
import {injectable} from 'inversify';
import * as headersConfigurationPath from '../../headers-configuration.json';

@injectable()
export class ExampleHeadersConfig implements HeaderConfig {
    dataVersion?: boolean;
    realityId?: boolean;

    constructor() {
        const headersConfiguration: HeadersConfiguration = headersConfigurationPath;
        this.dataVersion =  headersConfiguration.dataVersion;
        this.realityId = headersConfiguration.realityId;
    }

    getHeadersConfiguration(): HeadersConfiguration {
        const headerConfiguration: HeadersConfiguration = {
            dataVersion: this.dataVersion,
            realityId: this.realityId
        };
        return headerConfiguration;
    }
}