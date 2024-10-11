import {useState,useEffect} from 'react'
import List from "../list"
function Header() {
    const [Todo,setTodo] = useState([{todo:"",state:""}])
    const [AddTodo,setAddTodo] = useState([])

    useEffect(()=>{
        console.log("todo degisti",Todo.todo)
  },[Todo,AddTodo])

    const onSubmitet = (e)=> {
        e.preventDefault();       
     //   settodolist([...todolist,Todo])
        setAddTodo(Todo)
     e.target[0].value=""
        
    }
  return (
    <div className='todoapp header'>
      <h1>todos</h1>
      <form id='todoform' name='todoform' onSubmit={onSubmitet}  >
			<input name='todo' className="new-todo" placeholder="What needs to be done?" autoFocus  onChange={(e)=>setTodo({todo:e.target.value})}  />
		</form>
        <List addTodo={AddTodo} />
   



    </div>
  )
}

export default Header
