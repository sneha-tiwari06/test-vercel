// App.js
import './App.css';
import New from './new';
import Testing from './testing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Testing} />
          <Route exact path="/new" component={New} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
