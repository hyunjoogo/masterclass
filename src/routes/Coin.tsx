import {useLocation, useParams} from "react-router-dom";
import styled from "styled-components";
import {useState} from "react";

interface RouterParams {
  coinId : string;
}

interface QueryParams {
  name : string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor}
`;

export default () => {
  const [loading, setLoading] = useState(true);
  const {coinId} = useParams<RouterParams>();
  const {state} = useLocation<QueryParams>();

  return <Container>
    <Header>
      <Title>{state?.name || "Loading..."}</Title>
    </Header>
    {loading ? <Loader>Loading...</Loader> : null}
  </Container>
}
