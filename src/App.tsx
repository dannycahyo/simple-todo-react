import React from "react";
import Input from "./Input";
import List from "./List"

function App() {
  // tentukan type menggunakan generic type
  const [todos, setTodos] = React.useState<string[]>(["makan", "minum", "coding"])

  const handleAddTodo = (newTodo: string) => {
    setTodos([...todos, newTodo])
  }

  const handleEditTodo = (newTodo: string, targetIndex: number) => {
    setTodos(todos.map((todo, index) => {
      return index === targetIndex ? newTodo : todo
    }))
  }

  const handleDeleteTodo = (targetIndex: number) => {
    setTodos(todos.filter((todo, index) => index !== targetIndex))
  }

  return (
    <div>
      <h1> Todo List </h1>
      <Input
        placeholder="masukan kegiatan"
        label="Tambahkan"
        onSubmit={handleAddTodo}
      />
      <List items={todos}
        onDeleteItemPunyaList={handleDeleteTodo}
        onEditTodoPunyaList={handleEditTodo}
      />

    </div>
  );
}

export default App;
