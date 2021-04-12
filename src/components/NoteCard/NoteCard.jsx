import React, { Component } from "react";
import "./style.css";

class NoteCard extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.title}</h3>
        </header>
        <p className="card-nota_texto">{this.props.description}</p>
      </section>
    );
  }
}

export default NoteCard;
