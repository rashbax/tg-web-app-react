import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useTelegram } from './Hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductsList from './Components/ProductsList/ProductsList';
import Form from './Components/Form/Form';


function App() {

  const {tg, onToggleButton} = useTelegram()
 
  useEffect(()=> {
    tg.ready()
  },[])

  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route index element={<ProductsList/>}/>
      <Route path='/form' element={<Form/>}/>
     </Routes>
    </div>
  );
}

export default App;
