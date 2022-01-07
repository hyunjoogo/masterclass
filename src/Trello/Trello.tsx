import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.ul`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: #3F8CF2;
  border-radius: 5px;
`;
const Card = styled.li`
  background-color: #DADFE9;
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px 10px;
`;

const toDos = ["a", "b", "c", "d", "e", "f", "e"]

function Trello() {
  const onDragEnd = () => {

  };

  return (
    <>
      <h1>Drag & Drop</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId="one">
              {(provided, snapshot) =>
                <Board
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >

                  {toDos.map((toDo, index) => (
                    <Draggable draggableId={toDo} index={index} key={index}>
                      {(provided) => (
                        <Card ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                        >
                          {toDo}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                </Board>}

            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  )
}

export default Trello;
