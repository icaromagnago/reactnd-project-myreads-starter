//@flow
import React, { Component } from 'react';
import type { Book } from './Types';

type Props = {
	shelfId: string,
	book: Book,
	onUpdate: Function
};


class BookDetails extends Component<Props> {

	render() {
		
		const { shelfId, book, onUpdate } = this.props;
		
		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select defaultValue={shelfId} onChange={(event) => onUpdate(book, event.target.value)}>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors.join(", ")}</div>
				</div>
			</li>
		)
	}
}

export default BookDetails;