import { LoggerConfig } from '@enigmatis/polaris';
import { LoggerConfiguration } from '@enigmatis/polaris-logs';
import { injectable } from 'inversify';
import * as polarisLogConfigurationPath from '../../log-configuration.json';

@injectable()
export class ExampleLogConfig implements LoggerConfig {
    logstashHost: string;
    logstashPort: number;
    loggerLevel: string;
    writeToConsole: boolean;
    writeFullMessageToConsole: boolean;

    constructor() {
        this.loggerLevel = polarisLogConfigurationPath.loggerLevel;
        this.logstashHost = polarisLogConfigurationPath.logstashHost;
        this.logstashPort = polarisLogConfigurationPath.logstashPort;
        this.writeToConsole = polarisLogConfigurationPath.writeToConsole;
        this.writeFullMessageToConsole = polarisLogConfigurationPath.writeFullMessageToConsole;
    }

    getLogConfiguration(): LoggerConfiguration {
        const loggerConfiguration: LoggerConfiguration = {
            loggerLevel: this.loggerLevel,
            logstashHost: this.logstashHost,
            logstashPort: this.logstashPort,
            writeToConsole: this.writeToConsole,
            writeFullMessageToConsole: this.writeFullMessageToConsole,
        };
        return loggerConfiguration;
    }
}
