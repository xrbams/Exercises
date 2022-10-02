
import AddTodo from "./components/AddTodo";
import Todolist from "./components/Todolist";

const App = () => {


  const addTodoHandler = async (todo) => {
    console.log(todo);
    const response = await fetch(
      "https://kanjatips-3cd9b-default-rtdb.firebaseio.com/todos.json",
      {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <section>
        <AddTodo onAddTodo={addTodoHandler} />
      </section>
      <Todolist />
    </>
  );
};

export default App;
