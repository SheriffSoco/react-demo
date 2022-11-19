import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [showTodo, setShowTodo] = useState(true);

  function hideTodo() {
    setShowTodo(false);
  }

  return (
    <div>
      <div>
        <h1>My Todos</h1>
      </div>
      {showTodo && <Todo title="Wash dishes" deleteComponent={hideTodo}/>}
    </div>
  );
}

export default App;
