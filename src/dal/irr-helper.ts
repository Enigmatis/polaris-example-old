import { RepositoryModel } from '@enigmatis/mongo-driver';
import {PolarisContext, QueryIrrResult} from "@enigmatis/polaris";
import { Model } from 'mongoose';
import { InnerModelType } from '../../../mongo-driver/src/types';

export const QueryWithIrrelevant = async <T extends RepositoryModel>(
    model: Model<InnerModelType<T>>,
    result: T[],
    context: PolarisContext
): Promise<QueryIrrResult> => {
    const dataVersion = context.headers.dataVersion || 0;
    const irrelevant = await model.find(
        {
            _id: { $nin: result.map(x => x._id) },
            deleted: { $in: [true, false] },
            dataVersion: {$gt: dataVersion}
        },
        { _id: true },
    );

    return new QueryIrrResult(result, irrelevant);
};
