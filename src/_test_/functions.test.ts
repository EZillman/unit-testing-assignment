/**
 * @jest-environment jsdom
 */

import * as functions from '../ts/functions';
import { Todo } from '../ts/models/Todo';

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

 


