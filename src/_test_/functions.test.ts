/**
 * @jest-environment jsdom
 */

import * as functions from '../ts/functions';
import { Todo } from '../ts/models/Todo';

beforeEach(() => {
    document.body.innerHTML = "";
});


describe('everything with addTodo', () => {

    test('should return success true', () => {

        // Arrange
        let text = 'burger'
        let listOfTodos: Todo[] = []; 

        // Act
        let result = functions.addTodo(text, listOfTodos);

        // Assert
        expect(result.success).toBe(true);
        expect(listOfTodos.length).toBe(1);

    });

    
    test('should return success false', () => {

          // Arrange
          let text = 'b'
          let listOfTodos: Todo[] = []; 
  
          // Act
          let result = functions.addTodo(text, listOfTodos);
  
          // Assert
          expect(result.success).toBe(false);
          expect(listOfTodos.length).toBe(0);
    });
});



describe('everything with changeTodo', () => {

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

});



 describe('everything with removeAllTodos', () => {

    test('should remove all todos', () => {

        // Arrange
        let listOfTodos: Todo[] = []; 
        let todo1 = functions.addTodo('bagel', listOfTodos);
        let todo2 = functions.addTodo('toast', listOfTodos);

        // Act
        listOfTodos.splice(0, listOfTodos.length);

        // Assert
        expect(listOfTodos.length).toBe(0);
    });
 }); 


