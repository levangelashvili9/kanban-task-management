import styled from "styled-components";
import { ReactComponent as EllipsisSVG } from "assets/svg/icon-vertical-ellipsis.svg";

interface SubTaskTitleProps {
  isCompleted: boolean;
}

interface CheckBoxProps {
  isCompleted: boolean;
}

export const Container = styled.div`
  width: 343px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 24px 24px 32px 24px;

  background: ${(props) => props.theme.poppedWindowColor};
  border-radius: 6px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

export const HeadingTest = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  color: ${(props) => props.theme.titleColor};

  width: 80%;
  word-wrap: break-word;
`;

export const StyledEllipsisSVG = styled(EllipsisSVG)`
  cursor: pointer;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;

  color: #828fa3;
`;

export const SubTasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubHeading = styled.h4`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  margin-bottom: 8px;

  color: ${(props) => props.theme.subTitleColor};
`;

export const SubTaskContainer = styled.div`
  width: 100%;
  min-height: 40px;

  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 12px;

  background: ${(props) => props.theme.body};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: rgba(98, 95, 199, 0.25);
  }
`;

export const CheckBox = styled.div<CheckBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => (props.isCompleted ? "#635FC7" : "transparent")};

  width: 16px;
  height: 16px;
  border: 1px solid rgba(130, 143, 163, 0.248914);
  border-radius: 2px;
`;

export const SubTaskTitle = styled.p<SubTaskTitleProps>`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  text-decoration: ${(props) =>
    props.isCompleted ? "line-through" : "normal"};
  opacity: ${(props) => (props.isCompleted ? "0.5" : "1")};

  color: ${(props) => props.theme.titleColor};
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;

  padding: 0 16px;

  background: transparent;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;

  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: ${(props) => props.theme.inputTextColor};

  &:focus {
    outline: none;
  }

  option {
    color: ${(props) => props.theme.inputTextColor};
    background: ${(props) => props.theme.body};
    min-height: 40px;
    padding: 10px;
  }
`;
