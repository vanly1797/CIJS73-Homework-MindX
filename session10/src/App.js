import { Routes, Route } from "react-router-dom";
import Auth from './components/Auth';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
