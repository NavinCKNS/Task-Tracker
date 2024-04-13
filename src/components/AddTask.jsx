import React from 'react'
import { useState } from 'react'

export default function AddTask({onAdd}) {
    const [text,setText]=useState('')
    const [date,setDate]=useState('')
    const [time,setTime]=useState('')
    const [reminder,setReminder]=useState(false)

    let convertTime=Number(time.slice(0,2))>12?Number(time.slice(0,2))-12:Number(time.slice(0,2));
    let day=`${date} at ${convertTime}:${time.slice(3,5)} ${time<=12?'AM':'PM'}`
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add task')
            return
        }
        onAdd({text,day,reminder})
        setDate("")
        setTime("")
        setText("")
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add Task' />
        </div>
        <div className='form-control'>
            <label>Date</label>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Add Day & Time' required/>
        </div>
        <div className='form-control'>
            <label>Time</label>
            <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} placeholder='Add Day & Time' required/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} type='checkbox'/>
        </div>
        <input className="btn btn-block" type='submit' value='Save Task'/>
    </form>
  )
}
