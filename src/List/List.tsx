import React from "react";
import { IState as Props } from "../App";

interface Iprops {
  todo: Props["todo"];
  setTodo: React.Dispatch<React.SetStateAction<Props["todo"]>>;
}

const List: React.FC<Iprops> = ({ todo, setTodo }) => {
  const handleRemove = (id: number) => {
    const newTodo = todo.filter((td) => td.id !== id);
    setTodo(newTodo);
  };

  return (
    <div>
      {todo.map((td) => (
        <div className="row shadow bg-white rounded my-3 p-3 w-100 m-auto align-items-center justify-content-around">
          <div className="col-md-6">
            <h3>{td.title}</h3>
          </div>
          <div className="col-md-2">{td.start}</div>
          <div className="col-md-2">{td.end}</div>
          <div className="col-md-2">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleRemove(td.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
