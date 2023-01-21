import styled from "styled-components";

export const Container = styled.div`
  width: 280px;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  background: #49c4e5;
`;

export const HeadingText = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: #828fa3;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
