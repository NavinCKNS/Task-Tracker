import Tasks from './components/Tasks'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/tasks').then((response)=>response.json()).then((e)=>setTasks(e))
  },[])

  const deleteTask=async (id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE',})
    setTasks(tasks.filter((task)=> id != task.id ))
  }
  const addTask=async (task)=>{
    const response=await fetch('http://localhost:5000/tasks',{
      method:'POST',header:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })
     const data=await response.json()
     setTasks([...tasks,data])

    // const id=Math.floor(Math.random()*1000)+1
    // const newTask={id,...task}
    // setTasks([...tasks,newTask])

  }

  const toggleReminder=(id)=>{
     setTasks(tasks.map((task)=>
     task.id === id ? {...task,reminder:!task.reminder}:task))
    
     
  }
 
  
  return (
    <div className='container'>
     <Header title='Task Tracker' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
     :('No Tasks To Show') }
    </div>
  )
}

export default App
