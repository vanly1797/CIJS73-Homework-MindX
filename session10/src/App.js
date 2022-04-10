import { Routers, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routers>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />

      </Routers>
    </div>
  );
}

export default App;
