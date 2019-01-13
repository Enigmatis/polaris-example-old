import {injectable} from "inversify";
import {IPolarisServerConfig, PolarisProperties, readJsonFromFile} from "@enigmatis/polaris";
import {LoggerConfiguration} from "@enigmatis/polaris-logs/dist/src/LoggerConfiguration";
import {ApplicationLogProperties} from "@enigmatis/polaris-logs";


const path = require('path');

@injectable()
export class PolarisServerConfig implements IPolarisServerConfig {

    port: number;
    endpoint: string;
    applicationId: string;
    applicationName: string;
    repositoryVersion: string;
    environment: string;
    component: string;

    constructor() {
        let polarisPropertiesPath = path.join(__dirname, '../../properties.json');
        this.initiallizePolarisProperties(readJsonFromFile(polarisPropertiesPath));
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

    public getPolarisProperties(): PolarisProperties {
        return new PolarisProperties(this.port, this.endpoint, this.applicationId, this.applicationName,
            this.repositoryVersion, this.environment, this.component);
    }

    public getApplicationLogProperties(): ApplicationLogProperties {
        return new ApplicationLogProperties(this.applicationId, this.applicationName,
            this.repositoryVersion, this.environment, this.component);
    }
}