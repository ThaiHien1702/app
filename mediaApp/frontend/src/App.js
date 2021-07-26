import { BrowserRouter as Router, Route } from 'react-router-dom'
import PageRender from './PageRender';
import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <input type='checkbox' id='theme'></input>
      <div className="App">
        <div className="main">
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/:page" component={PageRender}></Route>
          <Route exact path="/:page/:id" component={PageRender}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
