import { useState} from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Clase 17 y 18/Home';
import PokeList from './Components/Clase 17 y 18/PokeList';
import Pokemon from './Components/Clase 17 y 18/Pokemon';
import PokeTypes from './Components/Clase 17 y 18/PokeTypes';
import TypeFilter from './Components/Clase 17 y 18/TypeFilter';
import { routes } from './configRoute'

function App() {

  const [loading, setLoading] = useState(true)
 
   return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Home/>}>
          <Route path={routes.pokeList} element={<PokeList setLoading={setLoading}/>}>
            <Route path=':pokeName' element={<Pokemon loading={loading} setLoading={setLoading}/>}/>
          </Route>
          <Route path={routes.pokeTypes} element={<PokeTypes/>}>
            <Route path=':type' element={<TypeFilter/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
