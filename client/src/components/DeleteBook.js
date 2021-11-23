import React from 'react'
import { Link } from "react-router-dom";

class DeleteBook extends React.Component {
    state = {
        id: '',
    }

    delete = (e) => {
        e.preventDefault()

        this.props.deleteBookHandler(this.state);
        this.state.id = ''
    }
    render() {
        return (
            <div style={{ marginTop: '10px' }}>

                <form className="ui form" onSubmit={this.delete} >
                    <div className="field" >
                        <label >Уникальный идентификатор</label>
                        <input type="text"
                            name="id"
                            placeholder="Введите ID книги, которую хотите удалить"
                            value={this.state.id}
                            onChange={(e) => this.setState({ id: e.target.value })} />

                    </div>
                    <button className="ui button red" >Удалить</button>

                </form>

            </div >
        )
    }
}

export default DeleteBook
