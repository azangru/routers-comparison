import React from 'react';
import { connect } from 'react-redux';

const Page1 = ({ state }) => {
  console.log('state', state)
  return (
    <div className="page">
      This is page 1
    </div>
  );
}

export default connect(state => ({
  state
}))(Page1)
