import styled from "styled-components";
import { ReactComponent as CrossSVG } from "assets/svg/icon-cross.svg";

export const AddTaskButton = styled.div`
  margin-right: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`;

export const Container = styled.form`
  width: 343px;
  height: 85vh;
  padding: 24px;

  border-radius: 6px;
  background: ${(props) => props.theme.poppedWindowColor};
  overflow: auto;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 32px;
  }
`;

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  margin-bottom: 24px;

  color: ${(props) => props.theme.titleColor};
`;

export const InputElement = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: ${(props) => props.theme.subTitleColor};
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  margin-top: 8px;
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

  &::placeholder {
    opacity: 0.25;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 112px;

  margin-top: 8px;
  padding: 8px 16px;

  background: transparent;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;

  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: ${(props) => props.theme.inputTextColor};

  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.25;
  }
`;

export const SubTask = styled.div`
  position: relative;
  padding-right: 30px;
  margin-bottom: 4px;
`;

export const StyledCrossSVG = styled(CrossSVG)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-25%);
  fill: #828fa3;

  &:hover {
    cursor: pointer;
    fill: red;
  }
`;

export const AddNewSubTask = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 8px;

  border-radius: 20px;
  border: none;

  font-weight: 700;
  font-size: 13px;
  line-height: 23px;

  text-align: center;
  cursor: pointer;

  background: ${(props) => props.theme.addButtonColor};
  color: #635fc7;
  transition: all 0.1s;

  &:hover {
    background: ${(props) => props.theme.addButtonColorHover};
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;

  margin-top: 8px;
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

export const CreateButton = styled.button`
  width: 100%;
  height: 40px;

  border-radius: 20px;
  border: none;

  font-weight: 700;
  font-size: 13px;
  line-height: 23px;

  text-align: center;
  cursor: pointer;

  background: #635fc7;
  color: #fff;
  transition: all 0.1s;

  &:hover {
    background: #a8a4ff;
  }
`;
