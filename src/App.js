import React from 'react';
import Search from './Search';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }
    
    componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }
moveShelves = (book, shelf) => {
  BooksAPI.update (book, shelf);
  BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
}

  render() {
    return (
      <div className="app">
      <MainPage 
       books={this.state.books}
       moveShelves={this.moveShelves}
       />
      {/*<Search
      moveShelves={this.moveShelves}
      />*/}
      </div>
)
    }
  }

export default BooksApp;
