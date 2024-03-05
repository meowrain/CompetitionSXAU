import { Container } from "@mui/material";
import "./App.css";
import Todo from "./components/Todo";
function App() {
  return (
    <Container fixed>
      <div>
        <Todo />
      </div>
    </Container>
  );
}

export default App;
