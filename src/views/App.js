import logo from './logo.svg';
import './App.scss';
import ListTodo from './ToDos/ListTodo';
// import ParentComponent from './ExampleComponents/ParentComponent';
// import FormComponent from './ex/FormComponent';
// import MyComponent from './ex/MyComponent';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>
  );
}

export default App;
