import styled from "styled-components";
import {useState} from "react";


interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor? : string;

}

function Circle({bgColor}: CircleProps) {
  const [ counter, setCounter ] = useState(1);

  return <Container bgColor={bgColor}/>
}

export default Circle;
