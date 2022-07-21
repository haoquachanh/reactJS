import logo from './logo.svg';
import './App.scss';

import Nav from './Nav/Nav';
import ListTodo from './ToDos/ListTodo';
// import ParentComponent from './ExampleComponents/ParentComponent';
// import FormComponent from './ex/FormComponent';
import MyComponent from './ExampleComponents/MyComponent';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import{
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom"
import Home from './ExampleComponents/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="todo" element={<ListTodo />} />
            <Route path="about" element={<MyComponent />} />
          {/* //</Route> */}
        </Routes>

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
    </BrowserRouter>
  );
}

export default App;
