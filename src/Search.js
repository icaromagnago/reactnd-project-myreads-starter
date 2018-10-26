//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookDetails from './BookDetails';
import * as BooksAPI from './BooksAPI';
import type { Book } from './Types';

type Props = {
	onAddBook: Function,
	myBooks: Array<Book>
};

type State = {
	query: string,
	books: Array<Book>
};

class Search extends Component<Props, State> {

	state = {
		query: '',
		books: []
	}

	updateQuery = (query: string) => {
		this.setState(() => ({
			query: query
		}));

		if (query !== '') {
			BooksAPI.search(query)
				.then((results) => {

					let books: Array<Book> = [];

					if(Array.isArray(results)) {
						books = results.map(result => {
							let bookInShelf: Array<Book> = this.props.myBooks.filter(b => b.id === result.id);
							result.shelf = bookInShelf.length > 0 ? bookInShelf[0].shelf : 'none';
							return result;
						})
					}

					this.setState(() => ({ 
						books 
					}))
				})
		} else {
			this.setState(() => ({
				books: [],
				query: ''
			}))
		}
	}

	render() {

		const { query, books } = this.state;
	
		return (
			<div className="search-books">
	      <div className="search-books-bar">
	      	<Link to='/' className='close-search'>Close</Link>
	        <div className="search-books-input-wrapper">
	          <input type="text" 
	          	placeholder="Search by title or author" 
	          	value={query}
							onChange={(event) => this.updateQuery(event.target.value)} />  
	        </div>
	      </div>
	      <div className="search-books-results">
	        <ol className="books-grid">
						{books.map(book => (
								<BookDetails shelfId={book.shelf} book={book} key={book.id} onUpdate={this.props.onAddBook} />
						))}
	        </ol>
	      </div>
	    </div>
		)
	}
}

export default Search;