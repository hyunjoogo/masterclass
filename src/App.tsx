import styled from "styled-components";
import Circle from "./Circle";

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${props => props.theme.textColor}
`;

interface TextProps {
  text: string;
  number : number;
}

function Dummy({text, number}: TextProps) {
  return <H1>{text}{number}</H1>
}

function App() {
  const onClick = (event:React.FormEvent<HTMLButtonElement>) => {

  }

  return (
    <Container>
      <Dummy text={"hello"} number={1}/>
      <form>
        <button onClick={onClick}></button>
      </form>
    </Container>
  )
}

export default App;
