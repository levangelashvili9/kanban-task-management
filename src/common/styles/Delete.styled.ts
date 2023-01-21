import styled from "styled-components";

export const Container = styled.div`
  width: 343px;
  height: 284px;
  padding: 24px;

  background: ${(props) => props.theme.poppedWindowColor};
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 229px;
    padding: 32px;
  }
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  color: #ea5555;

  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;

  color: #828fa3;

  margin-bottom: 24px;
`;

export const Buttons = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 16px;
  }
`;

export const DeleteButton = styled.button`
  width: 100%;
  height: 40px;
  background: #ea5555;
  border-radius: 20px;
  border: none;

  font-weight: 700;
  font-size: 13px;
  line-height: 23px;

  color: #ffffff;
  cursor: pointer;

  margin-bottom: 16px;

  &:hover {
    background: #ff9898;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 40px;
  background: #ffffff;
  border-radius: 20px;
  border: none;

  font-weight: 700;
  font-size: 13px;
  line-height: 23px;

  color: #635fc7;
  cursor: pointer;
`;
