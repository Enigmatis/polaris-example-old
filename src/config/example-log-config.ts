import { LoggerConfig } from '@enigmatis/polaris';
import { LoggerConfiguration } from '@enigmatis/polaris-logs';
import { injectable } from 'inversify';
import * as polarisLogConfigurationPath from '../../log-configuration.json';

@injectable()
export class ExampleLogConfig implements LoggerConfig {
    loggerConfiguration: LoggerConfiguration;

    constructor() {
        this.loggerConfiguration = {
            loggerLevel: polarisLogConfigurationPath.loggerLevel,
            logstashHost: polarisLogConfigurationPath.logstashHost,
            logstashPort: polarisLogConfigurationPath.logstashPort,
            writeToConsole: polarisLogConfigurationPath.writeToConsole,
            writeFullMessageToConsole: polarisLogConfigurationPath.writeFullMessageToConsole,
        };
    }
}
