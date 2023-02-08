
import './App.css';
import Input from './components/Input';
import Box from './components/Box';
function App() {
  return (
    <div className='bg-black h-screen p-3'>
     <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
      <Input />
      <Box/>
     </div>
    </div>
  );

}

export default App;
