import React from "react";
import {Categories, IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

const ToDo = ({text, category, id}: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget: {name}} = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = {text, id, category: name as any};
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });
  }
  return (
    <li>
      <span>{text}</span>
      {(category !== Categories.DOING && category !== Categories.DELETE) &&
        <button name={Categories.DOING} onClick={onClick}>Doing</button>}
      {category !== Categories.TO_DO &&
        <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
      {(category !== Categories.DONE && category !== Categories.DELETE) &&
        <button name={Categories.DONE} onClick={onClick}>Done</button>}
      {category !== Categories.DELETE &&
        <button name={Categories.DELETE} onClick={onClick}>Delete</button>}


    </li>
  )
}

export default ToDo;


// 삭제했을 경우에는 다시 돌릴 수 있게 To DO 버튼만 보이게하기
// 카테고리가 삭제 일 때
// category !== Categories.TO_DO => 카테고리가 투두가 아니면
// 카테고리가 투두가 아니고 카테고리가
