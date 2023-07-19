import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useTelegram } from './Hooks/useTelegram';


function App() {

  const {tg, onToggleButton} = useTelegram()
 
  useEffect(()=> {
    tg.ready()
  },[])

  return (
    <div className="App">
     <Header/>
     <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
