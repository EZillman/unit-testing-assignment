/**
 * @jest-environment jsdom
 */

import * as main from '../ts/main';
import * as functions from '../ts/functions';
//import { displayError } from './../ts/main';
//import { clearTodos } from './../ts/main';
import { Todo } from '../ts/models/Todo';

beforeEach(() => {
    document.body.innerHTML = "";
});


describe('everything with toggleTodo', () => {

    test('should change to done: true', () => {

        // Arrange
        document.body.innerHTML =
		'<ul id="todos" class="todo">' +
		'<li class="todo__text">Mock todo 1</li>' +
		'<li class="todo__text">Mock todo 2</li>' +
		'<li class="todo__text">Mock todo 3</li>' +
		'</ul>';

	    const todos: Todo[] = [
		    { text: 'Mock todo 1', done: false },
		    { text: 'Mock todo 2', done: false },
		    { text: 'Mock todo 3', done: false },
	    ];


        // Act
        functions.changeTodo(todos[0]);
    
        // Assert
        expect(todos[0]).toStrictEqual({'done': true, 'text': 'Mock todo 1'});
    });

    
    test('should change to done: false', () => {

        // Arrange
        document.body.innerHTML =
		'<ul id="todos" class="todo">' +
		'<li class="todo__text">Mock todo 1</li>' +
		'<li class="todo__text">Mock todo 2</li>' +
		'<li class="todo__text">Mock todo 3</li>' +
		'</ul>';

	    const todos: Todo[] = [
		    { text: 'Mock todo 1', done: true },
		    { text: 'Mock todo 2', done: true },
		    { text: 'Mock todo 3', done: true },
	    ];

        // Act
        functions.changeTodo(todos[0]);
    
        // Assert
        expect(todos[0]).toStrictEqual({'done': false, 'text': 'Mock todo 1'});
    }); 

    test('should call changeTodo & createHtml', () => {

        // Arrange
        let someTodo: Todo = {text: 'fly', done: true};
        let spyder = jest.spyOn(functions, 'changeTodo').mockReturnValue();;
        //let roach = jest.spyOn(main, 'createHtml').mockReturnValue();

        // Act
        main.toggleTodo(someTodo);

        // Assert
        expect(spyder).toHaveBeenCalled();
        //expect(roach).toHaveBeenCalled();
    });
}); 


describe('should add/remove css class on div depending on argument value', () => {

    test('should add class "show" if true', () => {

        // Arrange
        let errorText = 'An error has occured';
        document.body.innerHTML = `
        <div id="error" class="error" ></div>`;

        // Act
        main.displayError(errorText, true);

        // Assert
        let result = document.getElementById('error') as HTMLDivElement;
        expect(result.classList.contains('show')).toBe(true);
    });

    test('should remove class "show" if false', () => {

        // Arrange
        let errorText = 'An error has occured';
        document.body.innerHTML = `
        <div id="error" class="error" ></div>`;

        // Act
        main.displayError(errorText, false);

        // Assert
        let result = document.getElementById('error') as HTMLDivElement;
        expect(result.classList.contains('show')).toBe(false);
    });
});


describe('everything with clearTodos', () => {

    test('should call removeAllTodos & createHtml', () => {

        // Arrange
        let todos: Todo[] = [];

        let spy01 = jest.spyOn(functions, 'removeAllTodos').mockReturnValue();
        //let spy008 = jest.spyOn(main, 'createHtml').mockReturnValue();
        
        // Act
        main.clearTodos(todos);

        // Assert
        expect(spy01).toHaveBeenCalled();
        //expect(spy008).toBeCalled();
    });

    test('should remove all todos', () => {

        // Arrange
        document.body.innerHTML = 		
        '<ul id="todos" class="todo">' +
		'<li class="todo__text">Mock todo 1</li>' +
		'<li class="todo__text">Mock todo 2</li>' +
		'<li class="todo__text">Mock todo 3</li>' +
		'</ul>';

        const todos: Todo[] = [
            { text: 'Mock todo 1', done: false },
            { text: 'Mock todo 2', done: false },
            { text: 'Mock todo 3', done: false },
        ]; 


        // Act
        functions.removeAllTodos(todos);


        // Assert
        expect(todos.length).toBe(0);
       
    });
});