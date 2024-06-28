import React from 'react'
import TodoItem from './TodoItem'; 
const TodoItems = ({todoItems,onhandleDelete}) => {

  return (
    <>
    {todoItems.map((item)=>(
      <TodoItem todoName={item.name} todoDate={item.dueDate} onhandleDelete={onhandleDelete}></TodoItem>
    ))}
    </>
  )
}

export default TodoItems
