//@flow
import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from './BookShelf';
import type { Book } from './Types';

type State = {
	shelfs: Map<string, Array<Book>>
};

class BooksApp extends Component<{}, State> {

	state = {
		shelfs: new Map()
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {

				this.setState(() => {
					const newShelfs = new Map();
					newShelfs.set("Currently Reading", books.filter(book => book.shelf === "currentlyReading"));
					newShelfs.set("Want To Read", books.filter(book => book.shelf === "wantToRead"));
					newShelfs.set("Read", books.filter(book => book.shelf === "read"));

					return { shelfs: newShelfs}
				})
				//console.log(this.state.booksByCategory);
			})
	}

	render() {
			const { shelfs } = this.state;
    	return (
				<div className="app">
					{[...shelfs].map(( [key, value] ) => (
						<BookShelf key={key} title={key} books={value} />
					))}
				</div>
    	)
	}
}

export default BooksApp;