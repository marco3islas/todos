import {Todo} from ".";

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ) {

        this.todos.push( todo );
        this.guardarLocalStorage();


    }

    eliminarTodo( id ) {

        this.todos.filter( todo => {

            this.todos = this.todos.filter( todo => todo.id != id );
            this.guardarLocalStorage();

        })
        
    }

    marcarCompletado( id ) {

        for (const todo of this.todos) {

            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }
            
        }

    }

    elimiarCompletados() {

            this.todos = this.todos.filter( todo => !todo.completado);
        

    }


    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos) );
        
    }

    cargarLocalStorage() {


        this.todos = localStorage.getItem('todo') 
            ? this.todos = JSON.parse(localStorage.getItem('todo')) 
            : this.todos = [];

        this.todos = this.todos.map( obj => Todo.fromJason( obj )  );
        

     }
}
