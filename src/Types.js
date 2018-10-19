export type Book = {
	title: string,
	authors: Array<string>,
	imageLinks: Object
}; 

export type Shelf = {
	id: string,
	title: string,
	books: Array<Book>
};