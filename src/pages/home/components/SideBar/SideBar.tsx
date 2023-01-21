import { useState } from "react";
import {
  Container,
  LogoContainer,
  Heading,
  Board,
  StyledBoardSVG,
  BoardTitle,
  CreateNewBoard,
  StyledNewBoardSVG,
  ToggleDarkMode,
  TogglerButton,
  HideButton,
} from "./SideBar.styled";
import { ReactComponent as LightLogoDesktop } from "assets/svg/logo-light.svg";
import { ReactComponent as DarkLogoDesktop } from "assets/svg/logo-dark.svg";
import { ReactComponent as SunSVG } from "assets/svg/icon-light-theme.svg";
import { ReactComponent as MoonSVG } from "assets/svg/icon-dark-theme.svg";
import { ReactComponent as HideSideBarSVG } from "assets/svg/icon-hide-sidebar.svg";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { toggleTheme } from "redux/slices/themeSlice";
import { toggleBar } from "redux/slices/barSlice";
import { changeCurrentBoard } from "redux/slices/dataSlice";
import { AddBoard } from "../AddBoard";

export const SideBar = () => {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const { boards, currentBoard } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const [boardModalOpen, setBoardModalOpen] = useState<boolean>(false);

  return (
    <Container>
      <div>
        <LogoContainer>
          {isDarkMode ? <LightLogoDesktop /> : <DarkLogoDesktop />}
        </LogoContainer>
        <Heading>ALL BOARDS ({boards.length})</Heading>
        {boards.map((board, id) => (
          <Board
            onClick={() => dispatch(changeCurrentBoard(board.ID))}
            isActive={board.ID === currentBoard}
            key={id}
          >
            <StyledBoardSVG $isActive={board.ID === currentBoard} />
            <BoardTitle isActive={board.ID === currentBoard}>
              {board.name}
            </BoardTitle>
          </Board>
        ))}
        <CreateNewBoard onClick={() => setBoardModalOpen(true)}>
          <StyledNewBoardSVG />+ Create New Board
        </CreateNewBoard>
        <AddBoard
          boardModalOpen={boardModalOpen}
          setBoardModalOpen={setBoardModalOpen}
        />
      </div>
      <div>
        <ToggleDarkMode>
          <SunSVG />
          <TogglerButton
            onClick={() => dispatch(toggleTheme())}
            darkMode={isDarkMode ? true : false}
          ></TogglerButton>
          <MoonSVG />
        </ToggleDarkMode>
        <HideButton onClick={() => dispatch(toggleBar())}>
          <HideSideBarSVG />
          Hide Sidebar
        </HideButton>
      </div>
    </Container>
  );
};
