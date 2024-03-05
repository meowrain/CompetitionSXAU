import { Add } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import TodoList from "./TodoList";
export default function TodoForm() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
  }
  function handleDelete(index:number){
    const updateTodos = todos.filter((_,i)=>i!==index);
    setTodos(updateTodos);
  } 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="将要做的事情"
          variant="outlined"
          value={todo}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTodo(event.target.value);
          }}
        />
        <Button variant="contained" startIcon={<Add />} onClick={handleSubmit}>
          增加
        </Button>
      </form>
    <TodoList todos={todos} onDelete={handleDelete}/>
    </>
  );
}
