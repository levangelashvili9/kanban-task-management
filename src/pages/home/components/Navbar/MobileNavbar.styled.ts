import styled from "styled-components";
import { ReactComponent as BoardSVG } from "assets/svg/icon-board.svg";

interface ToggleDarkModeProps {
  darkMode: boolean;
}

interface BoardProps {
  isActive: boolean;
}

interface SVGProps {
  $isActive: boolean;
}

export const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);

  padding-top: 16px;

  width: 264px;
  // height: 322px;
  background: ${(props) => props.theme.poppedWindowColor};

  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
`;

export const Heading = styled.h2`
  margin-left: 24px;
  margin-bottom: 19px;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;

  color: #828fa3;
`;

export const Board = styled.div<BoardProps>`
  display: flex;
  align-items: center;
  margin-right: 24px;

  height: 48px;
  cursor: pointer;

  border-radius: 0px 100px 100px 0px;
  background: ${(props) => (props.isActive ? "#635FC7" : "transparent")};

  &:hover {
    background: ${(props) =>
      props.isActive ? "#635FC7" : "rgba(99, 95, 199, 0.25)"};
  }
`;

export const StyledBoardSVG = styled(BoardSVG)<SVGProps>`
  margin-left: 24px;
  margin-right: 12px;

  fill: ${(props) => (props.$isActive ? "#fff" : "#828fa3")};

  ${Board}:hover & {
    fill: #fff;
  }
`;

export const BoardTitle = styled.h3<BoardProps>`
  font-weight: 700;
  font-size: 15px;
  line-height: 0;

  color: ${(props) => (props.isActive ? "#fff" : "#828fa3")};

  ${Board}:hover & {
    color: #fff;
  }
`;

export const CreateNewBoard = styled.div`
  display: flex;
  align-items: center;

  height: 48px;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;

  color: #635fc7;
`;

export const StyledNewBoardSVG = styled(BoardSVG)`
  margin-left: 24px;
  margin-right: 12px;

  fill: #635fc7;
`;

export const ToggleDarkMode = styled.div`
  height: 48px;
  margin: 16px;
  background: ${(props) => props.theme.body};
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 23px;
`;

export const TogglerButton = styled.div<ToggleDarkModeProps>`
  width: 40px;
  height: 20px;
  position: relative;

  display: flex;

  align-items: center;
  padding: 3px;

  background: #635fc7;
  border-radius: 12px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    left: ${(props) => (props.darkMode ? "23px" : "3px")};

    width: 14px;
    height: 14px;

    background: #fff;
    border-radius: 50%;
    transition: all 0.3s;
  }
`;
