import React, { Component } from "react";
import NoteCard from "../NoteCard/";
import "./style.css";

class NoteList extends Component {

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notes.map((note, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <NoteCard title={note.title} description={note.description} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
