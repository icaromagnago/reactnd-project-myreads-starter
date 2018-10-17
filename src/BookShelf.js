//@flow
import React, { Component } from 'react';
import BookDetails from './BookDetails';
import type { Book } from './Types';

type Props = {
  title: string,
  books: Array<Book>
};

class BookShelf extends Component<Props> {
	render() {
		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{this.props.title}</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{this.props.books.map(book => (
								<BookDetails book={book} key={book.id} />
							))}
						</ol>
					</div>
				</div>
			</div>
		)
	}
}

export default BookShelf;