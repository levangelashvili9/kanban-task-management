import styled from "styled-components";
import { ReactComponent as DownChevronSVG } from "assets/svg/icon-chevron-down.svg";
import { ReactComponent as UpChevronSVG } from "assets/svg/icon-chevron-up.svg";

interface DesktopBoardTitleProps {
  isSideBarOpen: boolean;
}

export const Container = styled.header`
  height: 64px;
  padding: 16px;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.headerColor};

  @media screen and (min-width: 768px) {
    height: 90px;
    padding: 0 32px 0 24px;
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const BoardList = styled.div`
  cursor: pointer;
`;

export const MobileBoardTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  color: ${(props) => props.theme.titleColor};

  margin-left: 16px;
`;

export const DesktopBoardTitle = styled.h2<DesktopBoardTitleProps>`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  color: ${(props) => props.theme.titleColor};

  margin-left: ${(props) => (props.isSideBarOpen ? "300px" : "24px")};
`;

export const StyledDownChevronSVG = styled(DownChevronSVG)`
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-25%);
`;

export const StyledUpChevronSVG = styled(UpChevronSVG)`
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-25%);
`;

export const LogoContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;

  padding-right: 24px;
  border-right: 1px solid ${(props) => props.theme.borderColor};
`;

export const ShowButton = styled.div`
  position: fixed;
  bottom: 32px;
  left: 0;

  width: 56px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #635fc7;
  border-radius: 0px 100px 100px 0px;
  cursor: pointer;

  &:hover {
    background: #a8a4ff;
  }
`;
