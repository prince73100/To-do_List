
import Todocontent from "./Todocontent";
import { useSelector } from "react-redux";
const Todoitems = () => {
   const  {todoItems} = useSelector((store)=>store.todos)
    return <>
        <div className="container">
            <div className="item-container">
                {
                    todoItems.map((item)=>(<Todocontent key={item.todoName} todoItem={item.todoName} todoDates={item.tododate} ></Todocontent>))
                }
            </div>
        </div>
    </>
}
export default Todoitems;