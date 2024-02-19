import React,{useEffect, useState} from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [numberOfCounters, setNumberOfCounters]=useState(0)
  const addCounter=()=>{
    setNumberOfCounters(numberOfCounters+1)
  }
  if(numberOfCounters>1){
    return (
      <>
        {<Counter addCounter={addCounter}/>}
        {<Counter addCounter={addCounter}/>}
      </>
    );
  } else{
    return (
      <>
        {<Counter addCounter={addCounter}/>}
      </>
    );
  }
}

export default App;
