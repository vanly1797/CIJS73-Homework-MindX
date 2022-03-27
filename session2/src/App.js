import InputTask from "./components/InputTask";
import ListTask from "./components/ListTask";
import CountTask from "./components/CountTask";

function App() {
  return (
    <div className="App">
      <div className="box-todo-list">
        <InputTask />
        <ListTask task="Clean up bedroom" />
        <ListTask task="Buy some milk" />
        <ListTask task="Jogging" />
        <ListTask task="Learn React" />
        <ListTask task="Doing exercises" />
        <CountTask />
      </div>
    </div>
  );
}

export default App;
