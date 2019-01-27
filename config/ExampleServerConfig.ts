import { injectable } from 'inversify';
import { PolarisServerConfig, PolarisProperties } from '@enigmatis/polaris';
import { ApplicationLogProperties } from '@enigmatis/polaris-logs';

const polarisPropertiesPath = require('../properties.json');

@injectable()
export class ExampleServerConfig implements PolarisServerConfig {

    port: number;
    endpoint: string;
    applicationId: string;
    applicationName: string;
    repositoryVersion: string;
    environment: string;
    component: string;

    constructor() {
        this.initiallizePolarisProperties(polarisPropertiesPath);
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
            component: this.component,
        };
        return applicationLogProperties;
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
}