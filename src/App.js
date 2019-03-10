import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">Page1</Link>
          <Link to="/pages/page2">Page2</Link>
          <Link to="/pages/page/3">Page3</Link>
        </header>
        <div>
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route exact path="/pages/:pageNumber" component={Page2} />
            <Route exact path="/pages/:type/:number" component={Page3} />
            <Route render={() => (<div>Miss</div>)} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
