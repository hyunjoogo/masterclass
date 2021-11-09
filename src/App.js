import styled from "styled-components";

const Wrapper = styled.div`
  display:flex
`;

const Box = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  )
}

export default App;
