// It should store the todos array on an object
var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  // It should have a displayTodos method
  displayTodos: function() {
    console.log('My Todos:', this.todos);
  },
  // It should have an addTodo method
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  // It should have an changeTodo method
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  // It should have an deleteTodo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
