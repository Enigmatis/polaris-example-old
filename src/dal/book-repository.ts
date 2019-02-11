import { Book, BookModelPerReality } from './book-model';
import { PolarisRepository } from '@enigmatis/mongo-driver';

export class BookRepository extends PolarisRepository<Book> {
    constructor() {
        super(BookModelPerReality);
    }
}
