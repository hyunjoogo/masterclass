import React from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {categoryState, toDoSelector, Categories} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function TodoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
  }

  console.log(category)
  return (
    <div>
      <h1>To Dos</h1>
      <hr/>
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To DO</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
          <option value={Categories.DELETE}>Delete</option>
        </select>
      </form>
      {category !== Categories.DELETE && <CreateToDo/>}
      {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo}/>)}
    </div>
  )
}

export default TodoList
