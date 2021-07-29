import React from "react";
import { useState } from "react";
import { IState as Props } from "../App";

interface Iprops {
  todo: Props["todo"];
  setTodo: React.Dispatch<React.SetStateAction<Props["todo"]>>;
}

const AddtoList: React.FC<Iprops> = ({ todo, setTodo }) => {
  const [input, setInput] = useState({
    title: "",
    start: "",
    end: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.title || !input.start || !input.end) {
      return;
    }
    setTodo([
      ...todo,
      {
        id: todo.length + 1,
        title: input.title,
        start: input.start,
        end: input.end,
      },
    ]);
    input.title = "";
    input.start = "";
    input.end = "";
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add a todo"
        className="form-control mb-2"
        value={input.title}
        onChange={handleChange}
        name="title"
      />
      <input
        type="time"
        placeholder="Start Time"
        className="form-control mb-2"
        value={input.start}
        onChange={handleChange}
        name="start"
      />
      <input
        type="time"
        placeholder="End Time"
        className="form-control"
        value={input.end}
        onChange={handleChange}
        name="end"
      />
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Add Todo
      </button>
    </div>
  );
};

export default AddtoList;
