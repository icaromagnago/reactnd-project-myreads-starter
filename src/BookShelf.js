//@flow
import React, { Component } from 'react';
import BookDetails from './BookDetails';
import type { Book } from './Types';

type Props = {
	shelfId: string,
  title: string,
  books: Array<Book>,
  onUpdate: Function
};

class BookShelf extends Component<Props> {
	render() {

		const { shelfId, title, books, onUpdate } = this.props;
		
		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{books.map(book => (
								<BookDetails shelfId={shelfId} book={book} key={book.id} onUpdate={onUpdate} />
							))}
						</ol>
					</div>
				</div>
			</div>
		)
	}
}

export default BookShelf;