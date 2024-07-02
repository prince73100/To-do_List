import { configureStore, createSlice } from "@reduxjs/toolkit";


// For save data on the localStorage
const isItem = () => {
    try {
        const item_arr = localStorage.getItem("todoItems");
        if (item_arr === null) {
            return undefined;
        }
        return JSON.parse(item_arr);
    } catch (error) {
        console.error("Could not load state from the local storage", error);
        return undefined
    }
}

// here creating slice which have different reducers function
const addItemSlice = createSlice({
    name: "todos",
    initialState: {
        todoItems: isItem() || []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todoItems.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todoItems = state.todoItems.filter((item) => item.todoName !== action.payload)
        },
        editTodoItem: (state, action) => {
             state.todoItems = state.todoItems.map((item) => item.todoName === action.payload.name ? { ...item, todoName: action.payload.newtodo} : item)
        }
    }
})

const store = configureStore({
    reducer: {
        todos: addItemSlice.reducer
    }
})

export const AddActions = addItemSlice.actions;

export default store;
