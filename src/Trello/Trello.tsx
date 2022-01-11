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
        // 1. 전체 object에서 기존 내용을 복사
        const copyToDos = [...allBoards[source.droppableId]];
        // 2. 기존 array에서 선택된 아이템을 삭제
        copyToDos.splice(source.index, 1);
        // 3. 새로운 array에 선택된 아이템을 원하는 위치에 넣기
        copyToDos.splice(destination?.index, 0, draggableId);
        // 4. 새로 만들어진 array를 바꾸어서 전체 Object를 리턴
        return {
          ...allBoards,
          [source.droppableId]: copyToDos,
        }
      })
    }
    if (destination.droppableId !== source.droppableId) {
      // 다른 보드로 움직임
      setToDos((allBoards) => {
        // 1. 선택한 array, 옮겨진 array를 전체 오브젝트에서 복사
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]]
        // 2. 선택한 1번 어레이에서 선택된 아이템 삭제
        sourceBoard.splice(source.index, 1);
        // 3. 옮겨진 1번 array에 선택된 아이템을 원하는 위치에 넣기
        destinationBoard.splice(destination.index, 0, draggableId);
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
