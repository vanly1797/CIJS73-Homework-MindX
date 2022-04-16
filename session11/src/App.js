import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
      <footer>Made by StevenLee</footer>
    </div>
  );
}

export default App;