
import './App.css';
import Input from './components/Input';
import Box from './components/Box';
import { useState } from 'react';
function App() {
  const[todos,setToDo]=useState([]);


  const addToDoHandler = (item)=>{
    //  console.log(item);
    setToDo(
      [
        ...todos,
        {
          item,
          time: new Date().toLocalTimeString()
        }
      ]
    )
  }
  return (
    <div className='bg-black h-screen p-3'>
     <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
      <Input handler={addToDoHandler}/>
      <Box data ={todos}/>
     </div>
    </div>
  );

}

export default App;
