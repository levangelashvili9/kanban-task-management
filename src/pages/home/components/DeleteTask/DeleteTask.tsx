import Modal from "styled-react-modal";
import { useAppDispatch } from "redux/hooks";
import { deleteTask } from "redux/slices/dataSlice";

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
  columnID: number;
  taskID: number;
};

export const DeleteTask: React.FC<Props> = ({
  isDeleteOpen,
  toggleDelete,
  columnID,
  taskID,
}) => {
  const dispatch = useAppDispatch();

  const deleteHandler = () => {
    dispatch(deleteTask([columnID, taskID]));
    toggleDelete();
  };

  return (
    <>
      <Modal isOpen={isDeleteOpen} onBackgroundClick={toggleDelete}>
        <Container>
          <Heading>Delete this task?</Heading>
          <Text>
            Are you sure you want to delete the ‘Build settings UI’ task and its
            subtasks? This action cannot be reversed.
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
