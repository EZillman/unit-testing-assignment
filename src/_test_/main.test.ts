/**
 * @jest-environment jsdom
 */

import * as main from '../ts/main';
import * as functions from '../ts/functions';
import { Todo } from '../ts/models/Todo';

beforeEach(() => {
    document.body.innerHTML = "";
});


describe('everything with createNewTodo', () => {
    
    test('should create new todo', () => {

        // Arrange
	    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

	    const todoText = 'crossiant';
	    const todos: Todo[] = [];

        // Act
	    main.createNewTodo(todoText, todos);

        // Assert
	    expect(document.querySelector('#todos')?.innerHTML).toEqual(`<li class="todo__text">${todoText}</li>`);
    });

    test('should not create new todo', () => {

        // Arrange
	    document.body.innerHTML = '<div id="error" class="error"></div>' + '<ul id="todos" class="todo"></ul>';

	    const todoText = 'm';
	    const todos: Todo[] = [];

        // Act
	    main.createNewTodo(todoText, todos);

        // Assert
	    expect(document.querySelector('#error')?.classList.contains('show')).toBeTruthy();
    });
    
});



describe('everything with toggleTodo', () => {

    test('should call changeTodo & createHtml', () => {

        // Arrange
        let someTodo: Todo = {text: 'fly', done: true};
        let spyder = jest.spyOn(functions, 'changeTodo').mockReturnValue();;
        let roach = jest.spyOn(main, 'createHtml').mockReturnValue();

        // Act
        main.toggleTodo(someTodo);

        // Assert
        expect(spyder).toHaveBeenCalled();
        expect(roach).toHaveBeenCalled();
    });
}); 



describe('everything with displayError', () => {

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
        let spy02 = jest.spyOn(main, 'createHtml').mockReturnValue();
        
        // Act
        main.clearTodos(todos);

        // Assert
        expect(spy01).toHaveBeenCalled();
        expect(spy02).toBeCalled();
    });

});