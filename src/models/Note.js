export default class Notes {
    constructor(){
        this.itens = [];
        this._components = [];
    }

    add(title, description, category){
        const note = new Note(title, description, category);
        this.itens.push(note);
        this.notify();
    }

    remove(index){
        this.itens.splice(index, 1);
        this.notify();
    }

    handler(func){
        this._components.push(func)
    }

    notify(){
        this._components.forEach(func => {
            func(this.itens);
        });
    }

    removeFuncHandler(func){
        this._components = this._components.filter(f => f !== func);
    }
}

class Note {
    constructor(title, description, category){
        this.title = title;
        this.description = description;
        this.category = category;
    }
}

