import {injectable} from "inversify";
import {IConfig, LogProperties, PolarisProperties, readJsonFromFile} from "@enigmatis/polaris";


const path = require('path');

@injectable()
export class Config implements IConfig {

    logstashHost: string;
    logstashPort: number;
    loggerLevel: string;

    port: number;
    endpoint: string;
    applicationId: string;
    applicationName: string;
    repositoryVersion: string;
    environment: string;
    component: string;

    constructor() {
        let polarisPropertiesPath = path.join(__dirname, '../properties.json');
        this.initiallizePolarisProperties(readJsonFromFile(polarisPropertiesPath));
        let polarisLogConfigurationPath = path.join(__dirname, '../log-configuration.json');
        this.initiallizeLogProperties(readJsonFromFile(polarisLogConfigurationPath));
    }

    private initiallizeLogProperties(logConfiguration: string) {
        this.loggerLevel = logConfiguration['loggerLevel'];
        this.logstashHost = logConfiguration['logstashHost'];
        this.logstashPort = logConfiguration['logstashPort'];
    }

    private initiallizePolarisProperties(properties: string) {
        this.port = properties['port'];
        this.endpoint = properties['endpoint'];
        this.applicationId = properties['applicationId'];
        this.applicationName = properties['applicationName'];
        this.repositoryVersion = properties['repositoryVersion'];
        this.environment = properties['environment'];
        this.component = properties['component'];
    }

    public getLogProperties(): LogProperties {
        return new LogProperties(this.loggerLevel, this.logstashHost, this.logstashPort);
    }

    public getPolarisProperties(): PolarisProperties {
        return new PolarisProperties(this.port, this.endpoint, this.applicationId, this.applicationName,
            this.repositoryVersion, this.environment, this.component);
    }

}