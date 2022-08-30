import {ITodo} from '../types/data';
import { useState } from 'react';

interface ITodoItem extends ITodo{
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    updateTodo: (id: number, title: string) => void;
};

const TodoItem: React.FC<ITodoItem> = ({id, title, complete, toggleTodo, removeTodo, updateTodo}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(title);

    const handleEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            updateTodo(id, value);
            setIsEdit(!isEdit);
        }
    }

    return(
        <div className='todo'>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
            {isEdit ?
                <input className='todo__input' value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} />
                :
                <p className={`todo__description ${complete && 'todo__description_status_done'}`}>{title}</p>
            }
            
            <button onClick={handleEdit} className="todo__edit-btn">Edit</button>
            <button onClick={() => removeTodo(id)} className="todo__remove-btn">Delete</button>
        </div>
    )
};

export { TodoItem };