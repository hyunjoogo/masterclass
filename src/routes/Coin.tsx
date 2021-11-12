import {useParams} from "react-router-dom";

interface RouterParams {
  coinId : string;
}

export default () => {
  const {coinId} = useParams<RouterParams>();

  console.log(coinId)

  return <h1>Coin</h1>
}
