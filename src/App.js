import React, { Component } from 'react';
import { connect } from 'react-redux';


import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {/*
            <Link to="/">Page1</Link>
            <Link to="/pages/page2">Page2</Link>
            <Link to="/pages/page/3">Page3</Link>
          */}
        </header>
        <main>
        {/*
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route exact path="/pages/:pageNumber" component={Page2} />
            <Route exact path="/pages/:type/:number" component={Page3} />
            <Route render={() => (<div>Miss</div>)} />
          </Switch>
        */}
        </main>
        <footer>
          <button onClick={() => 'hello?' }>
            Programmatically go to page 3
          </button>
        </footer>
      </div>
    );
  }
}


export default (App);
