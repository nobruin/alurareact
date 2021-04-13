import React, { Component } from "react";
import NoteCard from "../NoteCard/";
import "./style.css";

class NoteList extends Component {
  constructor(props) {
    super(props);

    this._handlerNotes = this._handlerNotes.bind(this);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    this.props.notes.handler(this._handlerNotes);
  }

  componentWillUnmount(){
    this.props.notes.removeFuncHandler(this._handlerNotes);
  }

  _handlerNotes(notes) {
    this.setState({...this.state, notes});
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notes.map((note, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <NoteCard
                title={note.title}
                description={note.description}
                category={note.category}
                deleteNote={this.props.deleteNote}
                index={index}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NoteList;
