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
          <div className="col-md-4 border-end">
            <div className="text-muted fw-light">Todo Name</div>
            <h5>{td.title}</h5>
          </div>
          <div className="col-md-3">
            <div className="text-muted fw-light">Start time</div>
            <div>{td.start}</div>
          </div>
          <div className="col-md-3">
            <div className="text-muted fw-light">End time</div>
            <div>{td.end}</div>
          </div>
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
