type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Book = CommonEntity & {
    id: Scalars['ID'];
    creationDate?: Maybe<Scalars['String']>;
    lastUpdateDate?: Maybe<Scalars['String']>;
    dataVersion: Scalars['Int'];
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    realityId: Scalars['Int'];
};

export type BookInput = {
    id: Scalars['ID'];
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
};

export type CommonEntity = {
    id: Scalars['ID'];
    creationDate?: Maybe<Scalars['String']>;
    lastUpdateDate?: Maybe<Scalars['String']>;
    dataVersion: Scalars['Int'];
};

export type Mutation = {
    createBook?: Maybe<Book>;
    updateBook?: Maybe<Book>;
};

export type MutationCreateBookArgs = {
    book: BookInput;
};

export type MutationUpdateBookArgs = {
    bookId: Scalars['String'];
    update?: Maybe<UpdateBookInput>;
};

export type Query = {
    books?: Maybe<Array<Maybe<Book>>>;
};

export type Subscription = {
    bookChanged?: Maybe<Book>;
};

export type SubscriptionBookChangedArgs = {
    realityId: Scalars['Int'];
};

export type UpdateBookInput = {
    title?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
};
