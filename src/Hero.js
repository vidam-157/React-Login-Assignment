import React, {useState, useEffect} from "react";

import './App.css';
import Form from "./Form"
import TodoList from "./TodoList";
import './Dashboard.css';


const Hero = ({handleLogout}) => {
    
    const [inputText, setInputText] = useState(" ");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filterdTodos, setFiltredTodos] = useState([]);

     
    useEffect(() => {
        filterHandler();
    },
    [todos, status]
    );

    //Functions
    const filterHandler = () => {
        switch(status) {
            case 'completed':
                setFiltredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFiltredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFiltredTodos(todos);
                break;
            }
        };


    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>

            <header>
                <p> Your Todo LIST:</p>
            </header>

            <Form 
            inputText={inputText} 
            todos = {todos} 
            setTodos = {setTodos} 
            setInputText={setInputText} 
            setStatus = {setStatus}
            />

            <TodoList 
            filterdTodos = {filterdTodos} 
            setTodos={setTodos} 
            todos={todos} />
        </section>
    );
};

export default Hero;