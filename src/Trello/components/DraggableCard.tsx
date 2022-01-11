import {Draggable} from "react-beautiful-dnd";
import React from 'react';
import styled from "styled-components";

const Card = styled.li`
  background-color: #DADFE9;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px 10px;
`;

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({index, toDo}: IDragabbleCardProps) => {

  return (
    <Draggable draggableId={toDo} index={index}>
      {(provided) => (
        <Card ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  )
}

export default React.memo(DraggableCard)
