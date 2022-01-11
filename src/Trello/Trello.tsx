import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import {useRecoilState} from 'recoil';
import styled from "styled-components";
import {toDoState} from "./atoms";
import Board from "./components/Board";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;


function Trello() {
  const [toDos, setToDos] = useRecoilState(toDoState);

  const onDragEnd = (info: DropResult) => {
    const {destination, draggableId, source} = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      // 같은 보드에서 움직임
      setToDos((allBoards) => {
        // 1. 전체 리스트 (To_Do, doing, done)에서 선택된 리스트를 복사
        const copyToDos = [...allBoards[source.droppableId]];
        // 1.+  선택된 리스트 중 선택된 아이템을 선언
        const taskObj = copyToDos[source.index];
        // 2. 선택된 리스트에서 선택된 아이템을 삭제
        copyToDos.splice(source.index, 1);
        // 3. 선택된 아이템을 원하는 위치에 넣기
        copyToDos.splice(destination?.index, 0, taskObj);
        // 4. 바뀐 내용을 추가하여 전체 리스트를 리턴
        return {
          ...allBoards,
          [source.droppableId]: copyToDos,
        }
      })
    }
    if (destination.droppableId !== source.droppableId) {
      // 다른 리스트로 움직임
      setToDos((allBoards) => {
        // 1. 전체 리스트 (To_Do, doing, done)에서 선택된 리스트, 도착 리스트를 복사
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]]
        // 1.+ 선택된 리스트 중 선택된 아이템을 선언
        const taskObj = sourceBoard[source.index];
        // 2. 선택한 리스트에서 선택된 아이템 삭제
        sourceBoard.splice(source.index, 1);
        // 3. 도착 리스트에서 선택된 아이템을 원하는 위치에 넣기
        destinationBoard.splice(destination.index, 0, taskObj);
        // 4. 바뀐 내용을 추가하여 전체 리스트를 리턴
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        }
      })
    }
  };

  return (
    <>
      <h1>Drag & Drop</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map(boardId => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]}/>)}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  )
}

export default Trello;
