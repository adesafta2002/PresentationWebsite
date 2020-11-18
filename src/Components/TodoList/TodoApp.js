import React, {useState, useEffect} from 'react'
import './TodoApp.css';
import Form from './Form';
import TodoList from './TodoList';

function TodoApp() {
  
  //State
  const [inputText, setInputText] = useState ("")
  const [todos, setTodos] = useState([])
  const [status, setStatus]= useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])
  
  //Functions
   
  //Local Saving
   const saveLocalTodos =() => {
 
    localStorage.setItem("todos", JSON.stringify(todos))
    
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal= JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }
  
  //use effect
  useEffect (() => {
    getLocalTodos()
  },[])
  useEffect (() => {
    saveLocalTodos()
  },[todos])
  useEffect( () => {
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed===true ))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed===false ))
          break;
        default:
          setFilteredTodos(todos)
          break;
      }
    }
    filterHandler()
    
  },[todos, status]);
  
  
  return (
    <div className="App">
      <header>
        <h1>Adelin's ToDo List</h1>
      </header>
      <Form  inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}/>

      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default TodoApp;