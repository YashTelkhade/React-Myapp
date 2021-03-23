import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import UserGreetings from './components/UserGreetings';
import Namelist from './components/Namelist';
import Forms from './components/Forms';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom' 
import About from './components/About';
import Shop from './components/Shop';
import Customerlist from './components/customerlist';
import EditUser from './components/EditUser';
import fragment from './components/fragment';
import Hero from './components/23March/Hero';
import ErrorBoundary from './components/23March/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Customerlist></Customerlist>
        {/* <Greet name="Yash" city="Chandrapur"></Greet>
        <Welcome name="Yash" city="Chandrapur"></Welcome>
        <Greet name="Shubham" city="Amravati"></Greet>
        <Welcome name="Shubham" city="Amravati"></Welcome>
        <Message></Message>
        <Counter></Counter>
        <UserGreetings></UserGreetings>
        <Namelist></Namelist>
        <Forms></Forms>
        <PostList></PostList>
        <PostForm></PostForm> */}

        <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/add-customer">Add Customer</Link>
            <Link to="/fragment-demo">Fragment Demo</Link>
            
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={About}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/add-customer" exact component={PostForm}></Route>
        <Route path="/edit/:id" component={EditUser}></Route>
        {/* <Route path="/fragment-demo" component={fragment}></Route> */}
      </Switch>
      </Router>
      
      {/* <ErrorBoundary>
        <Hero heroname= "Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname= "Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname= "Joker"></Hero>
      </ErrorBoundary> */}
        <p>
          Edited and reloaded well.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
