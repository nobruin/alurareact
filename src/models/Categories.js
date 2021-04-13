
export default class Categories {
    constructor(){
        this.itens = [];
        this._components = [];
    }

    add(name){
        const category = new Category(name);
        this.itens.push(category);
        this.notify();
    }

    handler(func){
        this._components.push(func);
    }

    removeFuncHandler(func){
        this._components = this._components.filter(f => f !== func);
    }

    notify(){
        this._components.forEach(func => {
            func(this.itens);
        });
    }
}

class Category {
    constructor(name){
        this.name = name;
    }
}

