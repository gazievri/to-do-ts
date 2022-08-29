import { TodoItem } from './TodoItem';
import { ITodo } from '../types/data';

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const ITodoList: React.FC<ITodoListProps> = ({ items, removeTodo, toggleTodo }) => {
    return (
        <div className='todo-list'>
            {
                items.map(todo => (
                    <TodoItem 
                        key={todo.id} {...todo} 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo} 
                    />
                ))
            }
        </div>
    )
};

export { ITodoList };