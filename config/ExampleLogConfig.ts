import { injectable } from 'inversify';
import { LogConfig } from '@enigmatis/polaris';
import { LoggerConfiguration } from '@enigmatis/polaris-logs';

const polarisLogConfigurationPath = require('../log-configuration.json');

@injectable()
export class ExampleLogConfig implements LogConfig {

    logstashHost: string;
    logstashPort: number;
    loggerLevel: string;
    writeToConsole: boolean;
    writeFullMessageToConsole: boolean;

    constructor() {
        this.initiallizeLogProperties(polarisLogConfigurationPath);
    }

    public getLogConfiguration(): LoggerConfiguration {
        let loggerConfiguration: LoggerConfiguration = {
            loggerLevel: this.loggerLevel, logstashHost: this.logstashHost, logstashPort: this.logstashPort,
            writeToConsole: this.writeToConsole, writeFullMessageToConsole: this.writeFullMessageToConsole,
        };
        return loggerConfiguration;
    };

    private initiallizeLogProperties(logConfiguration: object) {
        this.loggerLevel = logConfiguration['loggerLevel'];
        this.logstashHost = logConfiguration['logstashHost'];
        this.logstashPort = logConfiguration['logstashPort'];
        this.writeToConsole = logConfiguration['writeToConsole'];
        this.writeFullMessageToConsole = logConfiguration['writeFullMessageToConsole'];
    }

}