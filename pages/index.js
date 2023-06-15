import BoxWithStyledComponent from "../components/BoxWithClassName/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Div>
      <BoxWithStyledComponent />
      <BoxWithStyledComponent isBlack />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;
