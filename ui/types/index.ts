export type ArrayInputTypes  = {
    email: string,
    password: string
}
export type RootStackParamList = {
    Main: undefined;
    Auth: undefined;
};
export type BooksObjectType = {
    id?: number,
    title?: string,
    author?: string,
    img?: string,
    about?: string,
    rating?: number,
    reviews?: number,
    takeBook?: boolean,
    star?: number
}