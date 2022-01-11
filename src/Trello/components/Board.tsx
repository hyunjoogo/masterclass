import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

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


interface IBoardProps {
  toDos: string[],
  boardId: string,
}

const Board = ({toDos, boardId}: IBoardProps) => {

  return (
    <Wrapper>
      <Title>{boardId}</Title>
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
                <DraggableCard key={toDo} index={index} toDo={toDo}/>
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
