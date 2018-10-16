//@flow
import React, { Component } from 'react';
import ListBooks from './ListBooks';

type Props = {
  title: string,
  books: Array<{}>
};

class BookShelf extends Component<Props> {
	render() {
		return (
			<div>
				<div className="bookshelf">
					<h2 className="bookshelf-title">{this.props.title}</h2>
					<div className="bookshelf-books">
						<ListBooks books={this.props.books} />
					</div>
				</div>
			</div>
		)
	}
}

export default BookShelf;