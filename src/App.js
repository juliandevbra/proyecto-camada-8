import { Routes, Route } from 'react-router-dom'
import Home from './Components/Clase 17/Home';
import PokeList from './Components/Clase 17/PokeList';
import Pokemon from './Components/Clase 17/Pokemon';
import PokeTypes from './Components/Clase 17/PokeTypes';
import { routes } from './configRoute'
function App() {

   return (
    <div className="App">
      <Routes>
        <Route path={routes.home} element={<Home/>}>
          <Route path={routes.pokeList} element={<PokeList/>}>
            <Route path=':pokeName' element={<Pokemon/>}/>
          </Route>
          <Route path={routes.pokeTypes} element={<PokeTypes/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
