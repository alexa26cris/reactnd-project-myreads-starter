import React from 'react'
import { Link, Route } from 'react-router-dom';
import Search from './Search';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }
    
    componentDidMount() => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    console.log:(this.state.books);
    return (
      <div className="app">
      <MainPage />
      </div>
)
    }
  }

export default BooksApp
