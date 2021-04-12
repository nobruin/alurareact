import { Component } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm/";
import './assets/css/index.css';
import './assets/css/App.css';
import CategoryList from "./components/CategoryList";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      categories: []
    };
  }

  createCategory(category) {
    this.setState({ categories: [...this.state.categories, category] });
  }

  createNote(title, description, category) {
    const note = { "title": title, "description": description, "category": category };
    this.setState({ notes: [...this.state.notes, note] });
  }

  deleteNote(index) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index, 1);
    this.setState(arrayNotes);
  }

  render() {
    return (
      <section className="conteudo">
        <NoteForm categories={this.state.categories} createNote={this.createNote.bind(this)} />
        <main className=",
        conteudo-principal">
          <CategoryList categories={this.state.categories} createCategory={this.createCategory.bind(this)}/>
          <NoteList notes={this.state.notes} deleteNote={this.deleteNote.bind(this)} />
        </main>
      </section>
    );
  }

}

export default App;
