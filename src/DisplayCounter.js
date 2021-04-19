// connect is a function that returns a function and it is used 
// to connect component with global state

import { connect } from 'react-redux';

function DisplayCounter(props) {
  return (
    <div>
      <h1>Display Global Count!</h1>
      <h1>{props.count}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(DisplayCounter)