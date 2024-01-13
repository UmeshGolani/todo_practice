import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(e.target);
    }

    const handleAdd = () => {
        setTodo([...todo,input]);
        setInput('');
    }

    const handleDelete = (i) => {
        
        console.log(i);
        setTodo(todo.splice(i, 1))

    }




  return (
    <div>
        
        <input type="text" value={input} onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
        {todo?.map((item, i) => {
            return (
                <div className="todo-component">
                <li key={i}>{item}</li>
                <button onClick={(i)=>handleDelete(i)}>Delete</button>
                </div>

            )

        })}
    </div>
  )
}

export default Todo