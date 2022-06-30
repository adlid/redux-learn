import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state=>state.cash.cash)

  const addCash = () =>{
    dispatch(
      {
        type:"ADD_CASH", 
        payload: 5
      })
  }
  const getCash  = () =>{
    dispatch(
      {
        type:"GET_CASH", 
        payload: 5
      })
  }
  console.log(cash)
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}> 
    <div style={{display:"flex"}}>
    <div> {cash}</div>
     <button onClick={()=>addCash()}>
       ADD cash
     </button>
     <button onClick={()=>getCash()}>
       GET cash
     </button>
    </div>
    </div>
  );
}

export default App;
