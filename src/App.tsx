import { useState, useEffect, useRef } from 'react';
import { Header } from './layout/Header';
import { ITodo } from './types/data';
import { ITodoList } from './components/TodoList';


const App: React.FC = () => {
    
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Number(new Date().getTime()),
                title: value,
                complete: false,
            }]);
            setValue('');  
        };
    };

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(x => x.id !== id));
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete,
            }
        }));
    }

    const updateTodo = (id: number, title: string) => {
        if (title) {
            setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                title: title,
            }
        }));
        }
    }

    useEffect(() => {

        if (localStorage["todos"]) {
            const userTodos = JSON.parse(localStorage.getItem("todos") || "")

            if ( userTodos.length !== 0) {
                setTodos(userTodos);
            };
        }

    }, [])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <div className='main'>
            <Header />
            <div className='add-todo'>
                <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef} />
                <button onClick={addTodo}>Add</button>
            </div>
            <ITodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} updateTodo={updateTodo} />
        </div> 
    )
};

export { App };