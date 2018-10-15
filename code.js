// It should have a place to store todos
var todos = ['item 1', 'item 2', 'item 3'];
// An array is a list in programming, a variable is like a nickname so we can reference to it later

// It should have a way to display todos
console.log('My Todos: ', todos);
// console.log() prints data to the console screen

// It should have a way to add new todos
todos.push('item 4');
// push() pushes something to the end of an array

// It should have a way to change a todo
todos[0] = 'item 1 changed';
// array[] to access an item in an array, starting from zero. If item is not available, it returns undefined.

// It should have a way to delete a todo
todos.splice(0, 1);
// splice() has two parameters, the number of the item we want to delete and the number of items to delete, and returns an array with the item(s) that were removed. If no items could be removed, it returns an empty array.
