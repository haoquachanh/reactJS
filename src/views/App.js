import logo from './logo.svg';
import './App.scss';
import ListTodo from './ToDos/ListTodo';
// import ParentComponent from './ExampleComponents/ParentComponent';
// import FormComponent from './ex/FormComponent';
// import MyComponent from './ex/MyComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to To Do List !!!
        </p><br />
        <ListTodo/>
      </header>
    </div>
  );
}

export default App;
