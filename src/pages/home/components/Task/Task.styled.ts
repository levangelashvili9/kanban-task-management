import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 23px 16px;
  background: ${(props) => props.theme.taskColor};
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
  border-radius: 8px;

  cursor: pointer;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;

  color: ${(props) => props.theme.titleColor};
  margin-bottom: 8px;

  ${Container} &:hover {
    color: #635fc7;
  }
`;

export const SubTasksContainer = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #828fa3;
`;
