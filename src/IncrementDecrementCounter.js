import {connect} from 'react-redux';
// BOOTSTRAP
import Button from 'react-bootstrap/Button'
import {GrAdd} from 'react-icons/gr'
import {GrSubtract} from 'react-icons/gr'
import {BsArrowDown} from 'react-icons/bs'
import {BsArrowUp} from 'react-icons/bs'


function IncrementDecrementCounter(props) {


  const handleIncrement = () => {
    props.onIncrement()
  }

  const handleDecrement = () => {
    props.onDecrement()
  }


  return (
    <div className= 'incrementDecrementContainer'>
      <h1>Increment Decrement Counter</h1>
      <h1>{props.count}</h1>
      <Button block variant="outline-primary" onClick = {handleIncrement} ><BsArrowUp /> Increment</Button>
      <Button block variant="outline-danger" onClick = {handleDecrement}><BsArrowDown /> Decrement</Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT'}),
    onDecrement: () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(null, mapDispatchToProps)(IncrementDecrementCounter)