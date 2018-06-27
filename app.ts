import {RunGraphQLServer} from '@enigmatis/polaris';
import {Schema} from './schema/schema';
RunGraphQLServer(Schema, 3000);