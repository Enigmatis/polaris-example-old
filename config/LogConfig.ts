import {injectable} from "inversify";
import {ILogConfig} from "@enigmatis/polaris";
import {LoggerConfiguration} from "@enigmatis/polaris-logs";
import {readJsonFromFile} from "../utils/FileReader";


const path = require('path');

@injectable()
export class LogConfig implements ILogConfig {

    logstashHost: string;
    logstashPort: number;
    loggerLevel: string;
    writeToConsole: boolean;
    writeFullMessageToConsole: boolean;

    constructor() {
        let polarisLogConfigurationPath = path.join(__dirname, '../../log-configuration.json');
        this.initiallizeLogProperties(readJsonFromFile(polarisLogConfigurationPath));
    }

    private initiallizeLogProperties(logConfiguration: object) {
        this.loggerLevel = logConfiguration['loggerLevel'];
        this.logstashHost = logConfiguration['logstashHost'];
        this.logstashPort = logConfiguration['logstashPort'];
        this.writeToConsole = logConfiguration['writeToConsole'];
        this.writeFullMessageToConsole = logConfiguration['writeFullMessageToConsole'];
    }

    public getLogConfiguration(): LoggerConfiguration {
        let loggerConfiguration: LoggerConfiguration = {
            loggerLevel:this.loggerLevel, logstashHost:this.logstashHost, logstashPort:this.logstashPort,
        writeToConsole:this.writeToConsole, writeFullMessageToConsole:this.writeFullMessageToConsole};
        return loggerConfiguration;
    };

}