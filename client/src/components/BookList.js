import React from 'react'
import BookCard from './BookCard'
import { Link } from "react-router-dom";


const BookList = (props) => {
    // console.log(props)

    const renderBookList = props.books.map((book) => {
        return (
            <BookCard book={book} key={book.id}></BookCard>
        )
    })
    return (

        <div className="ui celled list">
            <h1>Список доступных книг</h1>
            {renderBookList}
        </div>
    )
}

export default BookList
