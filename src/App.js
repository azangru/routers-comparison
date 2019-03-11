import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRouteNodeSelector } from 'redux-router5';
import { Link } from 'react-router5'

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

const Switch = ({routeName}) => {
  switch(routeName) {
    case 'page1':
      return <Page1 />
    case 'page2':
      return <Page2 />
    case 'page3':
      return <Page3 />
    default:
      return <div>Wow there!</div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link routeName="page1">Page1</Link>
          <Link routeName="page2" routeParams={{pageNumber: 2}}>Page2</Link>
          <Link routeName="page3" routeParams={{type: 'page', number: 3}}>Page3</Link>
        </header>
        <main>
          <Switch routeName={this.props.route.name} />
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


export default connect(createRouteNodeSelector(''))(App);
