import {inject, injectable} from 'inversify';
import {PolarisMiddleware, POLARIS_TYPES} from '@enigmatis/polaris';
import {GraphQLResolveInfo} from 'graphql';
import {PolarisLogger} from '@enigmatis/polaris-logs';

@injectable()
export class ExampleMiddleware implements PolarisMiddleware{
    @inject(POLARIS_TYPES.PolarisLogger) polarisLogger: PolarisLogger;

    preResolve(root: any, args:{ [argName: string]: any }, context: any, info: GraphQLResolveInfo) {
        //this.polarisLogger.debug(`from example before resolver, args: ${JSON.stringify(args)}, context:${JSON.stringify(context)}`);
    }

    postResolve(root: any, args:{ [argName: string]: any }, context: any, info: GraphQLResolveInfo , result:string) {
        //this.polarisLogger.debug(`from example after resolver, result: ${JSON.stringify(result)}`);
        return result;
    }
}
/*
{"headers":{},
    "_extensionStack":{
        "extensions":[{"debug":true},
                      {"options":
                              {"_dataVersion":"1"
                              ,"stripFormattedExtensions":true,
                                  "calculateHttpHeaders":true
                                  ,"defaultMaxAge":0}
                                  ,"hints":{},
                          "defaultMaxAge":0}
                          ]
}
}
}*/