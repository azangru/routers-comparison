import React from 'react';
import { connect } from 'react-redux';

const Page3 = ({ state }) => {
  console.log('state', state)
  return (
    <div>
      This is page 3
    </div>
  );
}

export default connect(state => ({
  state
}))(Page3)
