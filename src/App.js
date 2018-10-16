//@flow
import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from './BookShelf';

class BooksApp extends Component<{}> {

	state = {
		books: []
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {
				this.setState((prevState) => ({
					books: [books[0], books[1], books[3]]
				}))
				console.log(books[0]);
				console.log(books[1]);
				console.log(books[2]);
			})
	}

	render() {
    	return (
				<div className="app">
					<BookShelf title='Currently Reading' books={this.state.books} />
				</div>
    	)
	}
}

export default BooksApp;