import React, { Component } from 'react';
import "./style.css";

class CategoryList extends Component {
    _handlerOnKeyUpEvent(event){
        if(event.key === "Enter"){
            this.props.createCategory(event.target.value);
        }
    }
    render() { 
        return (  
            <section className="lista-categorias">
            <ul className="lista-categorias_lista">
                {this.props.categories.map((category, index) => {
                    return(
                        <li key={index} className="lista-categorias_item">{category}</li>    
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