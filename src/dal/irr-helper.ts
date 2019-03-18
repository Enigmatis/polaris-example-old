import { RepositoryModel } from '@enigmatis/mongo-driver';
import { Model } from 'mongoose';
import { InnerModelType } from '../../../mongo-driver/src/types';

export class QueryIrrResult {
    result: any[];
    irr: any[];

    constructor(result: any[], irr: any[]) {
        this.result = result;
        this.irr = irr;
    }
}

export const QueryWithIrrelevant = async <T extends RepositoryModel>(
    model: Model<InnerModelType<T>>,
    result: T[],
): Promise<QueryIrrResult> => {
    const irrelevant = await model.find(
        {
            _id: { $nin: result.map(x => x._id) },
            deleted: { $in: [true, false] },
        },
        { _id: true },
    );

    return new QueryIrrResult(result, irrelevant);
};
