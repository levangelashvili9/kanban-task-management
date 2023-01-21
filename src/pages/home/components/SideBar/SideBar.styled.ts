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
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 300px;

  background: ${(props) => props.theme.headerColor};
  border-right: 1px solid ${(props) => props.theme.borderColor};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-bottom: 32px;
  padding-right: 24px;
`;

export const LogoContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  margin-left: 34px;
`;

export const Heading = styled.h2`
  margin-top: 15px;
  margin-bottom: 19px;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;

  color: #828fa3;

  margin-left: 34px;
`;

export const Board = styled.div<BoardProps>`
  display: flex;
  align-items: center;

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
  margin-right: 12px;
  margin-left: 34px;

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
  margin-right: 12px;
  margin-left: 34px;

  fill: #635fc7;
`;

export const ToggleDarkMode = styled.div`
  height: 48px;
  margin-left: 24px;
  margin-bottom: 8px;

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

export const HideButton = styled.div`
  background: transparent;
  height: 48px;
  padding-left: 24px;

  border-radius: 0px 100px 100px 0px;
  font-weight: 700;
  font-size: 15px;
  line-height: 19px;

  display: flex;
  align-items: center;
  gap: 15px;

  color: #828fa3;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.hideTaskBarHover};
  }
`;
