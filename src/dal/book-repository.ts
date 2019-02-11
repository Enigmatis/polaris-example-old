import { PolarisRepository } from '@enigmatis/mongo-driver';
import { Book, BookModelPerReality } from './book-model';

export class BookRepository extends PolarisRepository<Book> {
    constructor() {
        super(BookModelPerReality);
    }
}
