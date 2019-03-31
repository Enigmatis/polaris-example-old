import { RepositoryEntity } from '@enigmatis/polaris';

export interface Book extends RepositoryEntity {
    id: string;
    title: string;
    author: string;
    otherBook?: Book;
}
