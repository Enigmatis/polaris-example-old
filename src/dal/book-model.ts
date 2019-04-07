import { getModelCreator, RepositoryModel } from '@enigmatis/mongo-driver';
import { Schema } from 'mongoose';
import {Book} from "../schema/entities/output/book";

export interface Book extends RepositoryModel {
    title: string;
    author: string;
    otherBook: Book;
}

const bookSchema: Schema = new Schema({
    title: String,
    author: String,
    otherBook: Book
});

export const BookModelPerReality = getModelCreator<Book>('book', bookSchema);
