import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.ul`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: #3F8CF2;
  border-radius: 5px;
`;
const Title = styled.h1`
  margin-bottom: 10px;
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
        {(provided, snapshot) =>
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} index={index} toDo={toDo}/>
            ))}
            {provided.placeholder}
          </div>}
      </Droppable>
    </Wrapper>
  )
}

export default Board;
