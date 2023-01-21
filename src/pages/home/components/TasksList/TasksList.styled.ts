import styled from "styled-components";

interface ContainerProps {
  isBarShowed: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-left: 16px;
  margin-top: 88px;

  display: flex;
  gap: 24px;
  transition: all 0.1s;

  @media screen and (min-width: 768px) {
    margin-left: ${(props) => (props.isBarShowed ? "324px" : "24px")};
    margin-top: 114px;
  }
`;
