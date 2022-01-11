import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import {useRecoilState} from 'recoil';
import styled from "styled-components";
import {toDoState} from "./atoms";
import DraggableCard from "./components/DraggableCard";

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


function Trello() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = ({source, destination, draggableId}: DropResult) => {
    if (!destination) return;
    setToDos((oldToDos) => {
      const copyToDos = [...oldToDos];
      copyToDos.splice(source.index, 1);
      copyToDos.splice(destination?.index, 0, draggableId);
      return copyToDos
    })
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
                    <DraggableCard key={toDo} index={index} toDo={toDo}/>
                  ))}
                  {provided.placeholder}
                </Board>}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  )
}

export default Trello;
