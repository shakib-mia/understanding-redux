import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import Data from './components/Data';

function App() {
  const dispatch = useDispatch(); 

  return (
    <>
      <Data />
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>add</button>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>subtract</button>

    </>
  );
}

export default App;
