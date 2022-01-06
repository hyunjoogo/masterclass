import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {categoryState, toDoSelector} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value)
  }

  console.log(category)
  return (
    <div>
      <h1>To Dos</h1>
      <hr/>
      <form>
        <select value={category} onInput={onInput}>
          <option value="TO_DO">To DO</option>
          <option value="DOING">Doing</option>
          <option value="DONE">Done</option>
        </select>
      </form>
      <CreateToDo/>
      {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo}/>)}
    </div>
  )
}

export default TodoList
