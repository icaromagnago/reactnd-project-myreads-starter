//@flow
import React, { Component } from 'react';
import BookDetails from './BookDetails';
import type { Book } from './Types';

type Props = {
	shelfId: string,
  title: string,
  books: Array<Book>
};

class BookShelf extends Component<Props> {
	render() {

		const { shelfId, title, books } = this.props;
		
		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{books.map(book => (
								<BookDetails shelfId={shelfId} book={book} key={book.id} />
							))}
						</ol>
					</div>
				</div>
			</div>
		)
	}
}

export default BookShelf;