import React from "react";

import {SubmitHandler, useForm} from "react-hook-form";


interface IForm {
  toDo : String;
}

function TodoList() {
  const {
    register,
    handleSubmit,
    setValue
  } = useForm<IForm>();

  const handleValid: SubmitHandler<IForm> = (data) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)} >
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>

      </form>
    </div>
  )
}

export default TodoList
