import { useEffect, useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AddActions } from "../store";
function Todoitem() {
const {todoItems} = useSelector((store)=>store.todos)
    const dispatch = useDispatch();
    const todoNamechange = useRef();
    const duedatechange = useRef();
    const [abled, setdeicabled] = useState("");

    // useing useEffect hook for displaying data
    useEffect(()=>{
        try {
            const todoitemsjson = JSON.stringify(todoItems)
            localStorage.setItem("todoItems",todoitemsjson);    
        } catch (error) {
            console.error("not save in local storage ",error);
        }
    },[todoItems])

    // Add to do function
    const onChangeButton = (event) => {
        event.preventDefault();
        let count=0;
        const todoName = todoNamechange.current.value;
        const tododate = duedatechange.current.value;
        dispatch(AddActions.addTodo({ todoName, tododate}))
        todoNamechange.current.value = "";
        duedatechange.current.value = "";
        setdeicabled("")
    }
    return <div className="item-container container">
        <div className="row kg-row">
            <div className="col-6">
                <input type="text" placeholder="Todo enter here" ref={todoNamechange} onChange={(e) => setdeicabled(e.target.value)} />
            </div>
            <div className="col-4">
                <input type="date" ref={duedatechange} />
            </div>
            <div className="col-2">
                 <button className="btn btn-primary kg-button" onClick={onChangeButton} disabled={abled === ""}  ><IoIosAddCircle /></button>
            </div>
        </div>
    </div>
}

export default Todoitem;