import Modal from "styled-react-modal";
import useWindowSize from "common/hooks/useWindowSize";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { toggleBar } from "redux/slices/barSlice";

import {
  Container,
  Wrapper,
  BoardList,
  MobileBoardTitle,
  DesktopBoardTitle,
  StyledDownChevronSVG,
  StyledUpChevronSVG,
  LogoContainer,
  ShowButton,
} from "./Header.styled";

import { ReactComponent as LogoMobile } from "assets/svg/logo-mobile.svg";
import { ReactComponent as LightLogoDesktop } from "assets/svg/logo-light.svg";
import { ReactComponent as DarkLogoDesktop } from "assets/svg/logo-dark.svg";
import { ReactComponent as ShowSideBarSVG } from "assets/svg/icon-show-sidebar.svg";

import { MobileNavbar } from "../Navbar";
import { AddTask } from "../AddTask";
import { SideBar } from "../SideBar";
import { BoardMenu } from "../BoardMenu";

export const Header = () => {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const { isBarShowed } = useAppSelector((state) => state.bar);
  const { boards, currentBoard } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const activeBoardID = boards.findIndex((board) => board.ID === currentBoard);

  const size = useWindowSize();

  return (
    <Container>
      {size.width >= 768 ? (
        <>
          {isBarShowed ? (
            <Wrapper>
              <SideBar />
              <DesktopBoardTitle isSideBarOpen={isBarShowed ? true : false}>
                {boards[activeBoardID].name}
              </DesktopBoardTitle>
            </Wrapper>
          ) : (
            <Wrapper>
              <LogoContainer>
                {isDarkMode ? <LightLogoDesktop /> : <DarkLogoDesktop />}
              </LogoContainer>
              <DesktopBoardTitle isSideBarOpen={false}>
                {boards[activeBoardID].name}
              </DesktopBoardTitle>
              <ShowButton onClick={() => dispatch(toggleBar())}>
                <ShowSideBarSVG />
              </ShowButton>
            </Wrapper>
          )}
        </>
      ) : (
        <>
          <Wrapper>
            <LogoMobile />
            <BoardList>
              <MobileBoardTitle onClick={() => dispatch(toggleBar())}>
                {boards[activeBoardID].name}
              </MobileBoardTitle>
              {isBarShowed ? <StyledUpChevronSVG /> : <StyledDownChevronSVG />}
            </BoardList>
          </Wrapper>
          <Modal
            isOpen={isBarShowed}
            onBackgroundClick={() => dispatch(toggleBar())}
          >
            <MobileNavbar />
          </Modal>
        </>
      )}
      <Wrapper>
        <AddTask />
        <BoardMenu />
      </Wrapper>
    </Container>
  );
};
