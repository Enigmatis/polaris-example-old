import { Schema } from 'mongoose';
import { RepositoryModel, getModelCreator } from '@enigmatis/mongo-driver';

export interface Book extends RepositoryModel {
    title: string;
    author: string;
}

const bookSchema: Schema = new Schema({
    title: String,
    author: String,
});

export const BookModelPerReality = getModelCreator<Book>('book', bookSchema);
