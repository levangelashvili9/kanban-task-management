import { useState } from "react";
import {
  Container,
  Heading,
  Board,
  BoardTitle,
  StyledBoardSVG,
  CreateNewBoard,
  StyledNewBoardSVG,
  ToggleDarkMode,
  TogglerButton,
} from "./MobileNavbar.styled";
import { ReactComponent as SunSVG } from "assets/svg/icon-light-theme.svg";
import { ReactComponent as MoonSVG } from "assets/svg/icon-dark-theme.svg";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { toggleTheme } from "redux/slices/themeSlice";
import { changeCurrentBoard } from "redux/slices/dataSlice";
import { AddBoard } from "../AddBoard";

export const MobileNavbar = () => {
  const { isDarkMode } = useAppSelector((state) => state.theme);
  const { boards, currentBoard } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();
  const [boardModalOpen, setBoardModalOpen] = useState<boolean>(false);

  return (
    <Container>
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
      <ToggleDarkMode>
        <SunSVG />
        <TogglerButton
          onClick={() => dispatch(toggleTheme())}
          darkMode={isDarkMode ? true : false}
        ></TogglerButton>
        <MoonSVG />
      </ToggleDarkMode>
    </Container>
  );
};
