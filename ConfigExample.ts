import {injectable} from "inversify";
import {IConfig} from "@enigmatis/polaris";
import {PropertiesHolder} from "@enigmatis/polaris/dist/properties/propertiesHolder";
import {readJsonFromFile} from "@enigmatis/polaris/dist/utils/FileReader";
const path = require('path');
@injectable()
export class Config implements IConfig{
    properties: string;
    logConfiguration: string;
    constructor(){
        let polarisPropertiesPath = path.join(__dirname, '../properties.json');
        this.properties = readJsonFromFile(polarisPropertiesPath);
        let polarisLogConfigurationPath = path.join(__dirname, '../log-configuration.json');
        this.logConfiguration = readJsonFromFile(polarisLogConfigurationPath);
    }
    getProperties(){
        return this.properties;
    }
    getLogConfiguration(){
        return this.logConfiguration;
    }
}