import { Component } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm/";
import './assets/css/index.css';
import './assets/css/App.css';
import CategoryList from "./components/CategoryList";
import Categories from "./models/Categories";
import Notes from "./models/Note";

class App extends Component {

  constructor(props) {
    super(props);
    this.categories = new Categories();
    this.notes = new Notes();
  }

  render() {
    return (
      <section className="conteudo">
        <NoteForm
          categories={this.categories}
          createNote={this.notes.add.bind(this.notes)}
        />
        <main className="conteudo-principal ">
          <CategoryList
            categories={this.categories}
            createCategory={this.categories.add.bind(this.categories)}
          />
          <NoteList
            notes={this.notes}
            deleteNote={this.notes.remove.bind(this.notes)}
          />
        </main>
      </section>
    );
  }

}

export default App;
