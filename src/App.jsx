import Heading from "./component/Heading";
import Todoitem from "./component/Todoitem";
import Todoitems from "./component/Todoitems";
import Meassgewelcome from "./component/Meassgewelcome";
import "./App.css";
import { useSelector } from "react-redux";
function App() {
  const { todoItems } = useSelector((store) => store.todos)
  return <center className="todo-container">
    <Heading />
    <Todoitem></Todoitem>
    {todoItems.length === 0 && <Meassgewelcome />}
    <Todoitems />
  </center>
}
export default App;