import "./style.css"

function ListTask(props) {
    return(
        <div className="box-task-list">
            <input type="radio" className="btnRadio" /> 
            <div className="task-name">{props.task}</div>
        </div>
    );
};

export default ListTask;