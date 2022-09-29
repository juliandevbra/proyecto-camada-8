import { useState} from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Clase 17 y 18/Home';
import PokeList from './Components/Clase 17 y 18/PokeList';
import Pokemon from './Components/Clase 17 y 18/Pokemon';
import PokeTypes from './Components/Clase 17 y 18/PokeTypes';
import TypeFilter from './Components/Clase 17 y 18/TypeFilter';
import { routes } from './configRoute'
import Login from './Components/Clase 26/Login';
import { Auth } from './Components/Clase 26/Auth'
import NotFound from './Components/Clase 17 y 18/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [loading, setLoading] = useState(true)
  console.log(Auth())
   return (
    <div className="App">
      <Login/>
      <Routes>
        <Route path={routes.home} element={Auth() ? <Home/> : <NotFound/>}>
          <Route path={routes.pokeList} element={<PokeList setLoading={setLoading}/>}>
            <Route path=':pokeName' element={<Pokemon loading={loading} setLoading={setLoading}/>}/>
          </Route>
          <Route path={routes.pokeTypes} element={<PokeTypes/>}>
            <Route path=':type' element={<TypeFilter/>}/>
          </Route>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
