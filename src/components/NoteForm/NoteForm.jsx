import React, { Component } from "react";
import "./style.css";

class NoteForm extends Component {
  constructor(props){
    super(props);
    this.title = "";
    this.description = "";
  }

  handleChangeTitle(event){
    event.stopPropagation();
    this.title = event.target.value;
  }

  handleChangeText(event){
    event.stopPropagation();
    this.description = event.target.value;
  }

  create(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.title, this.description);
  }

  render() {
    return (
      <form className="form-cadastro " 
        onSubmit={this.create.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleChangeTitle.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleChangeText.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default NoteForm;
