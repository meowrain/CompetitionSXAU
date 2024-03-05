import { Button,ButtonGroup } from "@mui/material"
interface TodoListProps {
    todos: string[];
    onDelete: (index: number) => void;
}
export default function TodoList({todos,onDelete}:TodoListProps) {
    return (
      <ul>
        {todos.map((todo,index) => (
          <li key={index}>
            {todo}
            <ButtonGroup  aria-label="Basic button group">
              <Button>Update</Button>
              <Button onClick={()=>onDelete(index)}>Delete</Button>
            </ButtonGroup>
          </li>
        ))}
      </ul>
        
    )
}