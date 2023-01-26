import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState(null);
  const getTodos = () => {
    fetch("http://localhost:4200/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        console.log(data);
      });
  };
  useEffect(() => {
    console.log("test");
    getTodos();
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      {todos && todos.length && (
        <ul>
          {todos.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Todos;
