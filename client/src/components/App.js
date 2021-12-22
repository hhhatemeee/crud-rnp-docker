import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header'
import AddBook from './AddBook'
import BookList from './BookList'
import { v1 as uuidv1 } from 'uuid';
import DeleteBook from './DeleteBook';


const App = () => {
  //Состояние книг 
  const [books, setBooks] = useState([])

  // делаем гет запрос в бд для выдачи книг
  const retrieveBooks = async () => {
    const response = await axios.get('http://192.168.11.2:5042/api/books')
    return response.data;
  }


  useEffect(() => {
    const getAllBooks = async () => {
      const allBooks = await retrieveBooks();
      if (allBooks) setBooks(allBooks)
    }
    getAllBooks();


  })
  //Добавление книги
  const addBookHandler = async (book) => {
    // console.log(book);
    const request = {
      id: Date.now(),
      ...book
    }
    console.log(book.releaseDate);
    console.log(Date.now());

    const response = await axios.post('http://192.168.11.2:5042/api/books', request)
    setBooks([...books, response.data]);

  }


  //Обновление книги
  const updateBookHandler = async (book) => {
    const request = {

      ...book
    }
    console.log(request);
    const response = await axios.put(`http://192.168.11.2:5042/api/books/${request.id}`, request)
  }

  //Удаление книги
  const deleteBookHandler = async (book) => {
    const request = Number(book.id);

    console.log(typeof (request));

    const response = await axios.delete(`http://192.168.11.2:5042/api/books/${request}`)
    console.log(response);
  }

  return (
    <div className="ui container">
      <Header />
      <AddBook addBookHandler={addBookHandler} updateBookHandler={updateBookHandler} />
      <DeleteBook deleteBookHandler={deleteBookHandler} />
      <BookList books={books} />
    </div>
  );

}

export default App;