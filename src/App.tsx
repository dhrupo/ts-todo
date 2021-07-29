import { useState } from "react";
import AddToList from "./AddToList/AddtoList";
import List from "./List/List";
import "./App.css";

export interface IState {
  todo: {
    id: number;
    title: string;
    start: string;
    end: string;
  }[];
  handleRemove: (id: number) => void;
}

const App = () => {
  const [todo, setTodo] = useState<IState["todo"]>([]);
  return (
    <div className="container w-50 my-3">
      <div className="card shadow">
        <h2 className="text-center card-header">Todo for today!</h2>
        <div className="card-body p-3">
          <AddToList todo={todo} setTodo={setTodo}></AddToList>
        </div>
      </div>
      <div>
        <List todo={todo} setTodo={setTodo}></List>
      </div>
    </div>
  );
};

export default App;
