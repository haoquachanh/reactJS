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
  Route,
  Switch,
  // Link
} from "react-router-dom"
import Home from './ExampleComponents/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/todo" exact><ListTodo /></Route>
            <Route path="/about"><MyComponent /></Route>
            <Route path="/user" exact><ListUser /></Route>
            <Route path="/user/:id"><DetailUser /></Route>
            {/* <Route path="/" exact element={<Home/>}/>
            <Route path="todo" element={<ListTodo />} />
            <Route path="about" element={<MyComponent />} />
            <Route path="user" element={<ListUser />} />
            <Route path="user/:id" element={<DetailUser />} /> */}
          {/* //</Route> */}
        </Switch>

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
