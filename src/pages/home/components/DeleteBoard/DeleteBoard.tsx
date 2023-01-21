import Modal from "styled-react-modal";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { deleteBoard } from "redux/slices/dataSlice";

import {
  CancelButton,
  Container,
  DeleteButton,
  Heading,
  Text,
  Buttons,
} from "common/styles/Delete.styled";

type Props = {
  isDeleteOpen: boolean;
  toggleDelete: () => void;
};

export const DeleteBoard: React.FC<Props> = ({
  isDeleteOpen,
  toggleDelete,
}) => {
  const { boards, currentBoard } = useAppSelector((state) => state.data);
  const activeBoardID = boards.findIndex((board) => board.ID === currentBoard);
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    if (boards.length > 1) {
      dispatch(deleteBoard());
      toggleDelete();
    }
  };

  return (
    <>
      <Modal isOpen={isDeleteOpen} onBackgroundClick={toggleDelete}>
        <Container>
          <Heading>Delete this board?</Heading>
          <Text>
            Are you sure you want to delete the ‘{boards[activeBoardID].name}’
            board? This action will remove all columns and tasks and cannot be
            reversed.
          </Text>
          <Buttons>
            <DeleteButton onClick={deleteHandler}>Delete</DeleteButton>
            <CancelButton onClick={toggleDelete}>Cancel</CancelButton>
          </Buttons>
        </Container>
      </Modal>
    </>
  );
};
