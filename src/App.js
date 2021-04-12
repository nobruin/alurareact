import { Component } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm/";
import './assets/index.css';
import './assets/App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      notes:[]
    };
  }

  createNote(title, description){
    const note = {"title":title, "description":description};
    this.setState({notes:[...this.state.notes, note]});
  }


  render(){
    return (
      <section className="conteudo">
      <NoteForm createNote={this.createNote.bind(this)} />
      <NoteList notes={this.state.notes}/>
    </section>
    );
  }
  
}

export default App;
