import { PolarisProperties, PolarisServerConfig } from '@enigmatis/polaris';
import { ApplicationLogProperties } from '@enigmatis/polaris-logs';
import { injectable } from 'inversify';
import * as polarisPropertiesPath from '../../properties.json';

@injectable()
export class ExampleServerConfig implements PolarisServerConfig {
    public port: number;
    public endpoint: string;
    public applicationId: string;
    public applicationName: string;
    public repositoryVersion: string;
    public environment: string;
    public component: string;

    constructor() {
        this.port = polarisPropertiesPath.port;
        this.endpoint = polarisPropertiesPath.endpoint;
        this.applicationId = polarisPropertiesPath.applicationId;
        this.applicationName = polarisPropertiesPath.applicationName;
        this.repositoryVersion = polarisPropertiesPath.repositoryVersion;
        this.environment = polarisPropertiesPath.environment;
        this.component = polarisPropertiesPath.component;
    }

    public getPolarisProperties(): PolarisProperties {
        return new PolarisProperties(this.port, this.endpoint);
    }

    public getApplicationLogProperties(): ApplicationLogProperties {
        const applicationLogProperties: ApplicationLogProperties = {
            id: this.applicationId,
            name: this.applicationName,
            repositoryVersion: this.repositoryVersion,
            environment: this.environment,
            component: this.component,
        };
        return applicationLogProperties;
    }
}
