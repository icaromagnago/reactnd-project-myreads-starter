//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookDetails from './BookDetails';
import * as BooksAPI from './BooksAPI';

type Props = {
	onUpdate: Function
};

type State = {
	query: string,
	books: Array<Book>
};

class Search extends Component<Props, State> {

	state = {
		query: "",
		books: []
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query: query.trim()
		}));

		if (query !== '') {
			BooksAPI.search(query)
				.then((books) => {
					this.setState(() => ({
						books: Array.isArray(books) ? books : []
					}))
				})
		} else {
			this.setState(() => ({
				books: []
			}))
		}
	}

	updateBook = (book, shelfId) => {
		BooksAPI.update(book, shelfId);
	}

	render() {

		const { query, books } = this.state;
		const { onUpdate } = this.props;
	
		return (
			<div className="search-books">
	      <div className="search-books-bar">
	      	<Link to='/' className='close-search'>Close</Link>
	        <div className="search-books-input-wrapper">
	          {/*
	            NOTES: The search from BooksAPI is limited to a particular set of search terms.
	            You can find these search terms here:
	            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

	            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
	            you don't find a specific author or title. Every search is limited by search terms.
	          */}
	           
	          <input type="text" 
	          	placeholder="Search by title or author" 
	          	value={query}
							onChange={(event) => this.updateQuery(event.target.value)} />
	          

	        </div>
	      </div>
	      <div className="search-books-results">
	        <ol className="books-grid">
						{books.map(book => (
								<BookDetails shelfId={book.shelf} book={book} key={book.id} onUpdate={this.updateBook} />
						))}
	        </ol>
	      </div>
	    </div>
		)
	}
}

export default Search;