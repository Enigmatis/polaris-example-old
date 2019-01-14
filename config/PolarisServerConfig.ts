import {injectable} from "inversify";
import {IPolarisServerConfig, PolarisProperties} from "@enigmatis/polaris";
import {ApplicationLogProperties} from "@enigmatis/polaris-logs";
import {readJsonFromFile} from "../utils/FileReader";


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

    private initiallizePolarisProperties(properties: object) {
        this.port = properties['port'];
        this.endpoint = properties['endpoint'];
        this.applicationId = properties['applicationId'];
        this.applicationName = properties['applicationName'];
        this.repositoryVersion = properties['repositoryVersion'];
        this.environment = properties['environment'];
        this.component = properties['component'];
    }

    public getPolarisProperties(): PolarisProperties {
        return new PolarisProperties(this.port, this.endpoint);
    }

    public getApplicationLogProperties(): ApplicationLogProperties {
        let applicationLogProperties: ApplicationLogProperties = {
            id: this.applicationId,
            name: this.applicationName,
            repositoryVersion: this.repositoryVersion,
            environment: this.environment,
            component: this.component};
        return applicationLogProperties;
    }
}