import logo from './logo.svg';
import './App.css';
import IncrementDecrementCounter from './IncrementDecrementCounter'
import DisplayCounter from './DisplayCounter';
import AddSubtractCounter from './AddSubtractCounter';
//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card'
import { CardDeck } from 'react-bootstrap';
// REACT ICONS
import {FaReact} from 'react-icons/fa'





function App() {
  return (
    <div className ='appContainer'>
      <h1>Hello Redux <FaReact />! Lets make some Counters!</h1>
      <CardDeck border='primary'>
      <Card border="primary" style={{ width: '18rem' }} bg= 'primary' text= 'white'>
        <DisplayCounter />
      </Card>
      <Card border="secondary" style={{ width: '18rem' }}>
        <IncrementDecrementCounter />
      </Card>
      <Card border="primary" style={{ width: '18rem' }}>
        <AddSubtractCounter />
      </Card>

      </CardDeck>
    </div>
  );
}

export default App;
