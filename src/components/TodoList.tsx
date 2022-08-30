import { TodoItem } from './TodoItem';
import { ITodo } from '../types/data';

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    updateTodo: (id: number, title: string) => void;
}

const ITodoList: React.FC<ITodoListProps> = ({ items, removeTodo, toggleTodo, updateTodo }) => {
    return (
        <div className='todo-list'>
            {
                items.map(todo => (
                    <TodoItem 
                        key={todo.id} {...todo} 
                        removeTodo={removeTodo} 
                        toggleTodo={toggleTodo} 
                        updateTodo={updateTodo}
                    />
                ))
            }
        </div>
    )
};

export { ITodoList };