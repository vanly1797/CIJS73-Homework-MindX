import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Context from './Context';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [login, setLogin] = useState(false);
  const [code, setCode] = useState("vi");
  return (
    <Context.Provider value={{ username: name, setName: setName, checklogin: login, setLogin: setLogin, code: code, setCode: setCode }}>
      <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

        <div className='box-header'>
          <Header />
          <Login />
        </div>
        <div className='box-content'>
          <Content />
        </div>
        <div className='box-footer'>
          <Footer />
        </div>

      </div>
    </Context.Provider>
  );
}

export default App;
