import { useAppSelector } from "redux/hooks";
import { useState, useEffect } from "react";
import Modal from "styled-react-modal";
import { useAppDispatch } from "redux/hooks";
import { editBoard } from "redux/slices/dataSlice";

import {
  Container,
  Heading,
  Input,
  Label,
  ColumnsContainer,
  Column,
  StyledCrossSVG,
  AddNewColumn,
  CreateButton,
} from "common/styles/ModifyBoards.styled";
import { Columns } from "common/types/types";

type Props = {
  editBoardOpen: boolean;
  toggleEditBoard: () => void;
};

export const EditBoard: React.FC<Props> = ({
  editBoardOpen,
  toggleEditBoard,
}) => {
  const { boards, currentBoard } = useAppSelector((state) => state.data);
  const activeBoardID = boards.findIndex((board) => board.ID === currentBoard);
  const activeBoard = boards[activeBoardID];

  const dispatch = useAppDispatch();

  const [nameInput, setNameInput] = useState<string>(activeBoard.name);

  const [columnsArray, setColumnsArray] = useState<Columns[]>(
    activeBoard.columns
  );

  useEffect(() => {
    setNameInput(activeBoard.name);
    setColumnsArray(activeBoard.columns);
  }, [activeBoard]);

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const arrayChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    const newArray: Columns[] = columnsArray.map(
      (arr: Columns, index: number) => {
        if (index === id) {
          return {
            ...arr,
            name: e.target.value,
          };
        } else {
          return arr;
        }
      }
    );
    setColumnsArray(newArray);
  };

  const addColumnInput = (): void => {
    setColumnsArray([...columnsArray, { name: "", tasks: [] }]);
  };

  const deleteColumnInput = (id: number): void => {
    if (columnsArray.length > 1) {
      setColumnsArray(
        columnsArray.filter((arr: Columns, index: number) => {
          return index !== id;
        })
      );
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(
      editBoard({
        ID: activeBoard.ID,
        name: nameInput,
        columns: columnsArray,
      })
    );
    toggleEditBoard();
  };

  return (
    <Modal isOpen={editBoardOpen} onBackgroundClick={toggleEditBoard}>
      <Container onSubmit={submitHandler}>
        <Heading>Edit Board</Heading>
        <div>
          <Label>Board Name</Label>
          <Input
            type="text"
            placeholder="e.g. Web Design"
            required
            value={nameInput}
            onChange={nameChangeHandler}
          />
        </div>
        <ColumnsContainer>
          <Label>Board Columns</Label>
          {columnsArray.map((column: Columns, id: number) => (
            <Column key={id}>
              <Input
                type="text"
                placeholder="e.g. Todo"
                required
                value={column.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  arrayChangeHandler(e, id)
                }
              ></Input>
              <StyledCrossSVG onClick={() => deleteColumnInput(id)} />
            </Column>
          ))}
          <AddNewColumn type="button" onClick={addColumnInput}>
            + Add New Column
          </AddNewColumn>
        </ColumnsContainer>
        <CreateButton>Save Changes</CreateButton>
      </Container>
    </Modal>
  );
};
