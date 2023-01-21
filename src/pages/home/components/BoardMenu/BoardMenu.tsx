import { useState } from "react";
import { DeleteBoard } from "../DeleteBoard";
import { EditBoard } from "../EditBoard";
import { Container, Edit, Delete } from "./BoardMenu.styled";

import { StyledEllipsisSVG } from "./BoardMenu.styled";

export const BoardMenu = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [editBoardOpen, setEditBoardOpen] = useState<boolean>(false);

  const toggleDelete = () => {
    setIsDeleteOpen((prev) => !prev);
  };

  const toggleEditBoard = () => {
    setEditBoardOpen((prev) => !prev);
  };

  return (
    <>
      <StyledEllipsisSVG onClick={() => setIsHidden((prev) => !prev)} />
      {isHidden ? null : (
        <Container>
          <Edit>
            <h3 onClick={toggleEditBoard}>Edit Board</h3>
            <EditBoard
              editBoardOpen={editBoardOpen}
              toggleEditBoard={toggleEditBoard}
            />
          </Edit>
          <Delete>
            <h3 onClick={toggleDelete}>Delete Board</h3>
            <DeleteBoard
              isDeleteOpen={isDeleteOpen}
              toggleDelete={toggleDelete}
            />
          </Delete>
        </Container>
      )}
    </>
  );
};
