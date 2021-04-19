import {connect} from 'react-redux'
import {useState} from 'react'
// BOOTSTRAP
import Button from 'react-bootstrap/Button'
import {GrFormAdd} from 'react-icons/gr'
import {GrFormSubtract} from 'react-icons/gr'


function AddSubtractCounter(props) {

  const [value, setValue] = useState(0)

  const handleOnChange = (e) => {
    setValue(parseInt(e.target.value))
  }

  const handleAdd = () => {
    props.onAdd(value)
  }
  const handleSubtract = () => {
    props.onSubtract(value)
  }
  

  return (
    <div className ='addSubtractContainer'>
      <h1>Add or Subract Counter</h1>
      <input type="text" onChange = {handleOnChange} style = {{margin: '25px'}}/>
      <Button block  variant='outline-success' onClick = {handleAdd}><GrFormAdd /> Add</Button>
      <Button block variant ='outline-warning'onClick = {handleSubtract}><GrFormSubtract /> Subtract</Button>
    </div>

  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (value) => dispatch({type: 'ADD', payload: value}),
    onSubtract: (value) => dispatch({type: 'SUBTRACT', payload: value})
  }
}





export default connect(null, mapDispatchToProps)(AddSubtractCounter)