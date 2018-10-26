//@flow
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import type { Book, Shelf } from './Types';
import BookShelf from './BookShelf';
import Search from './Search';
import Header from './Header';
import './App.css';


type State = {
	shelfs: { [string]: Shelf }
};

class BooksApp extends Component<{}, State> {

	state = {
		shelfs: {
			"currentlyReading": {
				id: "currentlyReading",
				title: "Currently Reading",
				books: []
			},
			"wantToRead": {
				id: "wantToRead",
				title: "Want To Read",
				books: []
			},
			"read": {
				id: "read",
				title: "Read",
				books: []
			}
		}
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books) => {

				this.setState(( prevState ) => {
					const { shelfs } = prevState;
					
					shelfs.currentlyReading.books = books.filter(book => book.shelf === shelfs.currentlyReading.id);
					shelfs.wantToRead.books = books.filter(book => book.shelf === shelfs.wantToRead.id);
					shelfs.read.books = books.filter(book => book.shelf === shelfs.read.id);

					return { shelfs }
				})
			})
	}

	updateBook = (book: Book, shelfId: string) => {
		this.setState((prevState) => {
			const { shelfs } = prevState;
			if(shelfs[shelfId]) {
				//remove from current shelf
				shelfs[book.shelf].books = shelfs[book.shelf].books.filter(b => b.id !== book.id);

				//add to the new shelf
				book.shelf = shelfId;
				shelfs[shelfId].books.push(book);
			} else {
				// in case of 'none' just remove from current shelf
				shelfs[book.shelf].books = shelfs[book.shelf].books.filter(b => b.id !== book.id);
			}

			return { shelfs };
		});

		BooksAPI.update(book, shelfId);
	}

	addBook = (book: Book, shelfId: string) => {
		if(book.shelf === 'none') {
			book.shelf = shelfId;
			this.setState((prevState) => {
				const { shelfs } = prevState;
				shelfs[shelfId].books.push(book);
			});

			BooksAPI.update(book, shelfId);
		} else {
			this.updateBook(book, shelfId);
		}
	}

	render() {
			const { shelfs } = this.state;
    	return (
				<div className="app">
					<Route exact path="/" render={() => (
						<div className="list-books">
           		<Header />
	          	<div className="list-books-content">
								{Object.keys(shelfs).map(key => (
									<BookShelf key={shelfs[key].id} 
										shelfId={shelfs[key].id} 
										title={shelfs[key].title} 
										books={shelfs[key].books} 
										onUpdate={this.updateBook} />
								))}
							</div>
							<div className="open-search">
								<Link to="/search">Add a book</Link>
            	</div>
						</div>
					)} />
					<Route path="/search" render={() => (
						<Search onAddBook={this.addBook} myBooks={[...shelfs.currentlyReading.books, ...shelfs.wantToRead.books, ...shelfs.read.books]} />
					)} />

					
				</div>
    	)
	}
}

export default BooksApp;