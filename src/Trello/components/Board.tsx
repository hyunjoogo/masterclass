import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {ITodo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";


const Wrapper = styled.ul`
  paddin-top: 10px;
  background-color: #3F8CF2;
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: white;
`;

interface IAreaProps {
  isDraggingOver: boolean,
  isDraggingFromThis: boolean
}

const Area = styled.div<IAreaProps>`
  background-color: ${props =>
          props.isDraggingOver
                  ? "#dfe6e9"
                  : props.isDraggingFromThis
                          ? "#b2bec3"
                          : "transparent"};
  flex-grow: 1;
  transition: background-color 0.5s ease-in-out;
  padding: 20px;
`;
const Form = styled.form`
  width: 100%;

`;


interface IBoardProps {
  toDos: ITodo[],
  boardId: string,
}

interface IForm {
  toDo: string;
}

const Board = ({toDos, boardId}: IBoardProps) => {
  const setToDos = useSetRecoilState(toDoState);
  const {register, setValue, handleSubmit} = useForm<IForm>();
  const onValid = ({toDo}: IForm) => {
    const newTodo = {
      id: Date.now(),
      text: toDo,
    }

    setToDos(allBoards => {
      // 기존 보드는 그대로 나두고 변경된 보드만 바꾸게 한다.
      return {
        // 모든 보드를 복사하고
        ...allBoards,
        // 기존 보드를 복사해서 새로운 내용만 추가해준다.
        [boardId] :  [newTodo, ...allBoards[boardId], ],

      }
    })
    setValue("toDo", "")
  }
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {required: true})}
          type="text"
          placeholder={`Add Task on ${boardId}`}/>
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => {
          return (
            <Area
              isDraggingOver={snapshot.isDraggingOver}
              isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {toDos.map((toDo, index) => (
                <DraggableCard key={toDo.id} index={index} toDoText={toDo.text} toDoId={toDo.id}/>
              ))}
              {provided.placeholder}
            </Area>
          )
        }}
      </Droppable>
    </Wrapper>
  )
}

export default Board;
