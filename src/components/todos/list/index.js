import { useState, useEffect } from 'react'

function List({ addTodo }) {



    const [todolist,settodolist] = useState([]);
    const [filterlist,setfilterlist] = useState([]);
    const [filterstate,setfilterstate] = useState(1);

    const removeTodo = (e) => {
       // todolist.splice(e.target.name, 1)
        settodolist(todolist.filter (a =>  e.target.name!==a.todo));
        console.log(e.target.name,"deleted");
        
    }

    const toggleTodo = (e) => {
        let editList=[...todolist];
        if(e.target.checked===true)
        {editList[e.target.id].state=true}
        else
        {
        editList[e.target.id].state=false}

        settodolist(editList);

        console.log(todolist[e.target.id].state)
    }
    
    const allActive = (e) =>{
      
        let editListActive=[...todolist];
        if( e.target.checked===true)
        editListActive.map((a)=>a.state=true)
        else
        editListActive.map((a)=>a.state=false)
        settodolist(editListActive)
        console.log("all active basıldı")

    }

    useEffect(()=>{
        if(addTodo.length!==0){
        settodolist([...todolist,addTodo])
        console.log(todolist,"list güncellendi")
        
    }
    },[addTodo])

    useEffect(()=>{
        filterstateselect();
    },[todolist,filterstate])
  
    const filterstateselect = ()=> {
        if(filterstate===1)
        setfilterlist(todolist);
        if(filterstate===2)
        setfilterlist(todolist.filter (a =>  a.state!==true));
        if(filterstate===3)
        setfilterlist(todolist.filter (a =>  a.state===true));

    }


    const allfilter = (e) => {
       
        setfilterstate(1);
    }

    const activefilter = (e) => {
        
        setfilterstate(2);

    }
    const comletedfilter = (e) => {
        
        setfilterstate(3);

    }
    const clearCompleted = (e) => {
        settodolist(todolist.filter (a =>  a.state!==true));
    }

    

    return (
        
        <div className="main">
            <input onClick={allActive} id="toggle-all" className="toggle-all" type="checkbox" />
            <label  htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
             
                {filterlist.map((item, i) => {
                    return (

                        <li key={i} className= {item.state?"completed":""} >
                            <div className="view">
                                <input name= {item.todo}  id={i} className="toggle" type="checkbox" checked={item.state} readOnly={true} onClick={toggleTodo}/>
                                <label key={i}>{item.todo}</label>
                                <button className="destroy" name={item.todo} onClick={removeTodo}></button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            {todolist.length>0 && 
            <div className='footer'>

            <span className="todo-count">
                <strong>{todolist.filter((a)=>a.state!==true).length} </strong>
                items left
            </span>
            
            <ul className="filters">
                <li>
                    <a href="#/" id={filterstate} onClick={allfilter} className={filterstate==1?"selected":""}>All</a>
                </li>
                <li>
                    <a href="#/" id={filterstate} onClick={activefilter} className={filterstate==2?"selected":""}>Active</a>
                </li>
                <li>
                    <a href="#/" id={filterstate} onClick={comletedfilter} className={filterstate==3?"selected":""}>Completed</a>
                </li>
            </ul>
            {todolist.filter((a)=>a.state===true).length>0&&
            <button className="clear-completed" onClick={clearCompleted}>
            Clear completed
        </button>
            }
            
        </div>
            }
            
        </div>
    )
}

export default List
