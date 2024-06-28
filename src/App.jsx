import AppName from './Component/AppName';
import './App.css';
import {useState} from 'react'
import AddTodo from './Component/AddTodo';
import TodoItems from './Component/TodoItems';

function App() {
  const [todoItems,setTodoItems]=useState([])

  const onhandleClick=(itemName,itemDate)=>{
   
    setTodoItems((currValue)=>[
      ...currValue,
      {name: itemName, dueDate:itemDate}
    ]);
  };


  const onhandleDelete=(itemName)=>{
    const newTodoItems= todoItems.filter((item)=>item.name!==itemName)
    setTodoItems(newTodoItems)
  }
  return (
 <center className="todo-container">
  <AppName/>
  <AddTodo onNewItem={onhandleClick}  />
  <div className="items-container">
    <TodoItems todoItems={todoItems}
    onhandleDelete={onhandleDelete}/>
    
  </div>
 </center>
  )
}

export default App
