import React from 'react';
import { connect } from 'react-redux';

const Page2 = ({ state }) => {
  console.log('state', state)
  return (
    <div className="page">
      This is page 2
    </div>
  );
}

export default connect(state => ({
  state
}))(Page2)
