import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Context from './Context';

function App() {
  return (
    <div className="App">
      <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Context.Provider>
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
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
