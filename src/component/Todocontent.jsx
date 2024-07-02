import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AddActions } from "../store";
import { MdModeEdit } from "react-icons/md";
import Popup from 'reactjs-popup';
import { useRef } from "react";

function Todocontent({ todoItem, todoDates }) {
    const editTodoItem = useRef()
    const dispatch = useDispatch();

    // edit function  
    const editTodoFunction = (name) => {
        const newtodo = editTodoItem.current.value
        dispatch(AddActions.editTodoItem({name,newtodo}))
    }

    // Deletion function
    const deleteItems = (todoName) => {
        dispatch(AddActions.removeTodo(todoName))
    }
    return <div className="row kg-row">
        <div className="col-2">
            <Popup trigger={<button className="btn btn-success  kg-button"><MdModeEdit /></button>}>
                <div className="card" style={{ width: "400px", marginLeft: "100px" }}>
                    <div className="card-body">
                        <div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Todo Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={editTodoItem} />
                            </div>
                            <button className="btn btn-primary" onClick={()=>editTodoFunction(todoItem)}>Edit</button>
                        </div>
                    </div>
                </div>
            </Popup>

        </div>
        <div className="col-4 text-sizes">
            {todoItem}
        </div>
        <div className="col-4 text-sizes">
            {todoDates}
        </div>
        <div className="col-2 ">
            <button className="btn btn-warning  kg-button" onClick={() => deleteItems(todoItem)} ><MdDelete /></button>
        </div>
    </div>
}
export default Todocontent;