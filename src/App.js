import React from 'react';
import { Route } from 'react-router-dom';
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
      <Route exact path='/' render={() => {
    return (
       <MainPage 
       books={this.state.books}
       moveShelves={this.moveShelves}
       />
)} />
     <Route path='/search' render={() => (
       return (
       <Search 
       moveShelves={this.moveShelves}
       books={this.state.books}
       />
)} />
      </div>
)
    }
  }

export default BooksApp;
