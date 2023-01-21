import Modal from "styled-react-modal";
import { useState } from "react";
import { Columns } from "common/types/types";
import { useAppDispatch } from "redux/hooks";
import { addBoard } from "redux/slices/dataSlice";
import { nanoid } from "@reduxjs/toolkit";

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

type Props = {
  boardModalOpen: boolean;
  setBoardModalOpen: (value: boolean) => void;
};

export const AddBoard: React.FC<Props> = ({
  boardModalOpen,
  setBoardModalOpen,
}) => {
  const [nameInput, setNameInput] = useState<string>("");
  const [columnsArray, setColumnsArray] = useState<Columns[]>([
    { name: "", tasks: [] },
  ]);

  const dispatch = useAppDispatch();

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
      addBoard({
        ID: nanoid(),
        name: nameInput,
        columns: columnsArray,
      })
    );
    setNameInput("");
    setColumnsArray([{ name: "", tasks: [] }]);
    setBoardModalOpen(false);
  };

  return (
    <Modal
      isOpen={boardModalOpen}
      onBackgroundClick={() => setBoardModalOpen(false)}
    >
      <Container onSubmit={submitHandler}>
        <Heading>Add New Board</Heading>
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
                value={columnsArray[id].name}
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

        <CreateButton type="submit">Create New Board</CreateButton>
      </Container>
    </Modal>
  );
};
