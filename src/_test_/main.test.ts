/**
 * @jest-environment jsdom
 */

import { displayError } from './../ts/main';

beforeEach(() => {
    document.body.innerHTML = "";
});

describe('should add or remove css class on div depending on argument value', () => {

    test('should add class "show" if true', () => {

        // Arrange
        let errorText = 'An error has occured';
        document.body.innerHTML = `
        <div id="error" class="error" ></div>`;

        // Act
        displayError(errorText, true);

        // Assert
        let result = document.getElementById('error') as HTMLDivElement;
        expect(result.classList.contains("show")).toBe(true);
    });

    test('should remove class "show" if false', () => {

        // Arrange
        let errorText = 'An error has occured';
        document.body.innerHTML = `
        <div id="error" class="error" ></div>`;

        // Act
        displayError(errorText, false);

        // Assert
        let result = document.getElementById('error') as HTMLDivElement;
        expect(result.classList.contains("show")).toBe(false);
    });
});