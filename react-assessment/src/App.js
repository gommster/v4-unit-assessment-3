import React, {Component} from 'react'
import './App.css';
import Header from './Header'
import SearchBar from './SearchBar'
import BookList from './BookList'
import Shelf from './Shelf'
import data from './data'

class App extends Component {
  constructor () {
    super();

    this.state = {
      books: data,
      shelf: []
    }

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

  addToShelf(title) {
    console.log('startAdd: ', title);
    let newShelf = this.state.shelf.concat(title);
    console.log(newShelf);
    this.setState({shelf: newShelf})
    console.log(this.state)
  }


  clearShelf() {
    this.setState({shelf: []})
  }

  filterBooks(inputTitle) {
    let filteredBooks = data.filter((book)=>book.title.includes(inputTitle));
    this.setState({books: filteredBooks})
  }

  reset () {
    this.setState({books: data})
  }

  render () {
    return (
      <div className="App">
        <Header />
        <SearchBar filter={this.filterBooks} clear={this.reset}/>
        <div className='bookDisplay'>
          <BookList shelfIt={this.addToShelf} books={this.state.books}/>
          <Shelf shelvedBooks={this.state.shelf} clear={this.clearShelf}/>
        </div>
      </div>
    );
  }
}

export default App;
