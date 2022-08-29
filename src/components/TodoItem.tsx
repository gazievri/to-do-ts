import {ITodo} from '../types/data';

interface ITodoItem extends ITodo{
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
};

const TodoItem: React.FC<ITodoItem> = ({id, title, complete, toggleTodo, removeTodo}) => {

    return(
        <div className='todo'>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
            <p className={`todo__description ${complete && 'todo__description_status_done'}`}>{title}</p>
            <button onClick={() => removeTodo(id)} className="todo__edit-btn">Edit</button>
            <button onClick={() => removeTodo(id)} className="todo__remove-btn">Delete</button>
        </div>
    )
};

export { TodoItem };