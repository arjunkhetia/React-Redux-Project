import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementby5 } from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}> + </button> &nbsp;
      <button onClick={() => dispatch(incrementby5(5))}> +5 </button> &nbsp;
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
}

export default App;
