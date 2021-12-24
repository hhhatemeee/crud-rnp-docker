import React from 'react'

class AddBook extends React.Component {
    state = {
        id: "",
        title: "",
        author: "",
        releaseDate: "",
        genre: "",
        price: "",
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.id === '') {
            const hideTextId = document.getElementById('hideId');
            const inputUpdateId = document.getElementById('inputUpdateId');

            hideTextId.style.color = 'red'
            inputUpdateId.style.border = '1px solid rgba(250,0,0,.50)'

            alert(`ВВЕДИТЕ ID В ДОПОЛНИТЕЛЬНОЕ ПОЛЕ. \n *если его нет - откройте скрытое содержимое`)
        }
        console.log(typeof (this.state.id));
        this.props.updateBookHandler(this.state);
    }

    add = (e) => {
        e.preventDefault();

        if (this.state.title === "" && this.state.author === "" && this.state.releaseDate === "" && this.state.genre === "" && this.state.price === "") {
            alert('Заполните все поля')
            return
        }

        console.log(this.state.releaseDate)
        this.props.addBookHandler(this.state);
    }

    render() {
        return (
            <div className="ui main" style={{ paddingTop: "15px" }}>
                <h2>Add Book</h2>
                <form className="ui form" onSubmit={this.add}>

                    <div className="field">
                        <label >Название</label>
                        <input type="text"
                            name="title"
                            placeholder="Введите название книги"
                            value={this.state.title}
                            onChange={(e) => this.setState({ title: e.target.value })} />


                    </div>
                    <div className="field">
                        <label >Автор</label>
                        <input type="text"
                            name="author"
                            placeholder="Введите автора книги"
                            value={this.state.author}
                            onChange={(e) => this.setState({ author: e.target.value })} />


                    </div>
                    <div className="field">
                        <label >Дата выпуска</label>
                        <input type="text"
                            name="releaseDate"
                            placeholder="Введите дату книги. Формат записи 'MM-DD-YY'"
                            value={this.state.releaseDate}
                            onChange={(e) => this.setState({ releaseDate: e.target.value })} />


                    </div>
                    <div className="field">
                        <label >Жанр</label>
                        <input type="text"
                            name="genre"
                            placeholder="Введите жанр книги"
                            value={this.state.genre}
                            onChange={(e) => this.setState({ genre: e.target.value })} />


                    </div>
                    <div className="field">
                        <label >Цена</label>
                        <input type="text"
                            name="price"
                            placeholder="Введите цену книги"
                            value={this.state.price}
                            onChange={(e) => this.setState({ price: e.target.value })} />

                    </div>
                    <a href="#" id="hideId" style={{ display: 'block', marginBottom: '5px' }}
                        onClick={() => {
                            const hideId = document.getElementById('hideId');
                            const idUpdate = document.getElementById('idUpdate');

                            // hideId.style.color = 'black'

                            if (getComputedStyle(idUpdate).display === 'none') {
                                hideId.textContent = 'Скрыть содержимое'
                                return idUpdate.style.display = 'block'
                            }
                            if (getComputedStyle(idUpdate).display === 'block') {
                                hideId.textContent = 'Открыть содержимое'
                                return idUpdate.style.display = 'none'
                            }
                        }
                        }>Если хотите обновить запись - откройте скрытое содержимое</a>
                    <div className="field" id="idUpdate" style={{ display: 'none' }}>
                        {/* <label>Уникальный идентификатор</label> */}
                        <input type="text"
                            name="id"
                            id='inputUpdateId'
                            placeholder="Введите ID книги, которую хотите обновить"
                            value={this.state.id}
                            onChange={(e) => {
                                const inputUpdateId = document.getElementById('inputUpdateId');
                                const hideId = document.getElementById('hideId');

                                hideId.style.color = '#4183c4'
                                inputUpdateId.style.border = '1px solid rgba(34,36,38,.15)'

                                this.setState({ id: e.target.value })
                            }
                            } />
                        <label style={{ color: 'red', opacity: '50%', marginTop: '3px' }}>*поле игнорируется при добавлении </label>

                    </div>
                    <button className="ui button teal" onClick={this.add}>Добавить</button>
                    <button className="ui button yellow" onClick={this.update}>Обновить</button>


                </form>
            </div>
        );
    }
}
export default AddBook
