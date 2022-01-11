import {Draggable} from "react-beautiful-dnd";
import React from 'react';
import styled from "styled-components";

interface ICardProps {
  isDragging: boolean,
}

const Card = styled.li<ICardProps>`
  background-color: ${props => props.isDragging ? "#74b9ff" : "#DADFE9"};
  box-shadow: ${props => props.isDragging ? "0 2px 5px rgba(0,0,0,0.5)" : "none"};
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px 10px;
  color: black;
`;

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DraggableCard = ({index, toDoId, toDoText}: IDragabbleCardProps) => {

  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  )
}

export default React.memo(DraggableCard)
