import styled from "styled-components";
import { ReactComponent as CrossSVG } from "assets/svg/icon-cross.svg";

export const Container = styled.form`
  width: 343px;
  max-height: 85vh;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: auto;

  background: ${(props) => props.theme.poppedWindowColor};
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 32px;
  }
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  color: ${(props) => props.theme.titleColor};
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

export const ColumnsContainer = styled.div``;

export const Column = styled.div`
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

export const AddNewColumn = styled.button`
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

export const CreateButton = styled.button`
  width: 100%;
  min-height: 40px;

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
