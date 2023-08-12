import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useTelegram } from './Hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import Form from './Components/Form/Form';
import ProductList from './Components/ProductsList/ProductList';


function App() {

  const {tg, onToggleButton} = useTelegram()
 
  useEffect(()=> {
    tg.ready()
  },[])

  return (
    <div className="App">
     <Header/>
     {/* <Routes>
      <Route index element={<ProductList/>}/>
      <Route path='/form' element={<Form/>}/>
     </Routes> */}
     hello world
    </div>
  );
}

export default App;
