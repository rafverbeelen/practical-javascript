// It should store the todos array on an object
var todoList = {
  todos: [],
  // .displayTodos should show .todoText
  // .displayTodos should tell if .todos is empty
  // .displayTodos should show .completed
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty.')
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length, i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  // todoList.addTodo should add objects
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false;
    });
    this.displayTodos();
  },
  // todoList.changeTodo should change the todoText property
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  // It should have an deleteTodo method
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // todoList.toggleCompleted should change the completed property
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
