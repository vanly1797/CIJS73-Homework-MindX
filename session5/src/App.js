import "./style.css"
import { useState } from "react";

function App() {
  const [redColor, setRedColor] = useState("white");
  const [yellowColor, setYellowColor] = useState("white");
  const [greenColor, setGreenColor] = useState("white");
  const [count, setCount] = useState(0);

  const changeColor = () => {
    
    switch (count) {
      case 0:
        setRedColor("red");
        setGreenColor("white");
        setCount(count + 1);
        break;
      case 1:
        setYellowColor("yellow");
        setRedColor("white");
        setCount(count + 1);
        break;
      default:
        setGreenColor("green");
        setYellowColor("white");
        setCount(0);
        break;
    }
    console.log(count);
  };
  
  return (
    <div className="App">
      <div className="box-total">
        <div className="box-button">
          <input type="submit" value="Next" onClick={changeColor}/>
        </div>
        <div className="box-color">
          <div className="box-red" style={{background: redColor}}></div>
          <div className="box-yellow" style={{background: yellowColor}}></div>
          <div className="box-green" style={{background: greenColor}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
