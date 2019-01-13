import {injectable} from "inversify";
import {ILogConfig, readJsonFromFile} from "@enigmatis/polaris";
import {LoggerConfiguration} from "@enigmatis/polaris-logs/dist/src/LoggerConfiguration";


const path = require('path');

@injectable()
export class LogConfig implements ILogConfig {

    logstashHost: string;
    logstashPort: number;
    loggerLevel: string;

    constructor() {
        let polarisLogConfigurationPath = path.join(__dirname, '../../log-configuration.json');
        this.initiallizeLogProperties(readJsonFromFile(polarisLogConfigurationPath));
    }

    private initiallizeLogProperties(logConfiguration: string) {
        this.loggerLevel = logConfiguration['loggerLevel'];
        this.logstashHost = logConfiguration['logstashHost'];
        this.logstashPort = logConfiguration['logstashPort'];
    }

    public getLogConfiguration(): LoggerConfiguration {
        return new LoggerConfiguration(this.loggerLevel, this.logstashHost, this.logstashPort);
    }
}