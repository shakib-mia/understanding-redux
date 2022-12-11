import './App.css';
import { useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import Data from './components/Data';
import { useGetAllPostsQuery } from './features/API/apiSlice';

function App() {
  const dispatch = useDispatch(); 
  const {data} = useGetAllPostsQuery();

  return (
    <>
      <Data />
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>subtract</button>
      <button onClick={() => console.log(data)}>Get Data</button>  
    </>
  );
}

export default App;
