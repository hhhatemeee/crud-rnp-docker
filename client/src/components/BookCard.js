import React from 'react'

const BookCard = (props) => {
    const { id, title, author, genre, price } = props.book
    let { releasedate } = props.book;
    if (typeof (releasedate) === 'string') releasedate = releasedate.substr(0, 10);
    return (
        <div className="item">
            <div className="content">
                <div className="header" style={{ fontSize: '1.2rem' }}><strong style={{ fontSize: '1rem' }}>Название: </strong>{title}</div>
                <div><label style={{ color: 'teal' }}>Дата выхода: </label> {releasedate}</div>
                <div><label style={{ color: 'teal' }}>Жанр: </label> {genre}</div>
                <div><label style={{ color: 'teal' }}>Цена: </label> {price}$</div>
                <div><label style={{ color: 'teal' }}>Автор: </label> {author}</div>
                <div><label style={{ color: 'teal' }}>Id: </label> {id}</div>
            </div>
        </div>
    )
}

export default BookCard
