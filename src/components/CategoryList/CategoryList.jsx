import React, { Component } from 'react';
import "./style.css";

class CategoryList extends Component {

    constructor(props) {
        super(props);

        this._handlerCategories = this._handlerCategories.bind(this);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.props.categories.handler(this._handlerCategories);
    }

    componentWillUnmount() {
        this.props.categories.removeFuncHandler(this._handlerCategories);
    }

    _handlerCategories(categories) {
        this.setState({ ...this.state, categories });
    }

    _handlerOnKeyUpEvent(event) {
        if (event.key === "Enter") {
            this.props.createCategory(event.target.value);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categories.itens.map((category, index) => {
                        return (
                            <li key={index} className="lista-categorias_item">{category.name}</li>
                        );
                    })}
                </ul>
                <input
                    className=""
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handlerOnKeyUpEvent.bind(this)}
                />
            </section>

        );
    }
}

export default CategoryList;