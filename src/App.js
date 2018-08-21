import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Search from './Search';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    console.log(this);
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" render={() => <MainPage books={this.state.books} moveShelf={this.moveShelf} />} />
          <Route exact path="/search" render={() => <Search moveShelf={this.moveShelf} books={this.state.books} />} />
        </div>
      </BrowserRouter>
    )
  }
}


export default BooksApp;
