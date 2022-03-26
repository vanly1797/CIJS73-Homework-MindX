import ReactDOM from 'react-dom';

function TaskList(props){
    return(
        <div className="task">
            <input type="radio" /> {props.task}
        </div>
    )
}

ReactDOM.render(
    <div>
        <TaskList task="Clean up bedroom" />
        <TaskList task="Buy some milk" />
        <TaskList task="Jogging" />
        <TaskList task="Learn React" />
        <TaskList task="Doing Exercises" />
    </div>
)

export default TaskList;