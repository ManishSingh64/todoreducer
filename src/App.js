// import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList';

function App() {


  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
