import { useState } from "react";
import Modal from "styled-react-modal";
import useWindowSize from "common/hooks/useWindowSize";
import { Columns, SubTasks } from "common/types/types";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { addTask } from "redux/slices/dataSlice";
import { nanoid } from "@reduxjs/toolkit";

import {
  AddTaskButton,
  Container,
  Heading,
  InputElement,
  Label,
  Input,
  TextArea,
  SubTask,
  StyledCrossSVG,
  AddNewSubTask,
  Select,
  CreateButton,
} from "common/styles/ModifyTasks.styled";
import { ReactComponent as MobileAddTaskSVG } from "assets/svg/add-task-mobile.svg";
import { ReactComponent as DesktopAddTaskSVG } from "assets/svg/add-task-desktop.svg";

export const AddTask = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { boards, currentBoard } = useAppSelector((state) => state.data);
  const size = useWindowSize();
  const dispatch = useAppDispatch();

  const [titleInput, setTitleInput] = useState<string>("");
  const [descriptionInput, setDescriptionInput] = useState<string>("");
  const [subtasksArray, setSubtasksArray] = useState<SubTasks[]>([
    { title: "", isCompleted: false },
  ]);
  const [statusOption, setStatusOption] = useState<string>("");

  const activeBoardID = boards.findIndex((board) => board.ID === currentBoard);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };

  const descriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescriptionInput(e.target.value);
  };

  const arrayChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    const newArray: SubTasks[] = subtasksArray.map(
      (arr: SubTasks, index: number) => {
        if (index === id) {
          return {
            ...arr,
            title: e.target.value,
          };
        } else {
          return arr;
        }
      }
    );
    setSubtasksArray(newArray);
  };

  const addSubtaskInput = (): void => {
    setSubtasksArray([...subtasksArray, { title: "", isCompleted: false }]);
  };

  const deleteSubtaskInput = (id: number): void => {
    if (subtasksArray.length > 1) {
      setSubtasksArray(
        subtasksArray.filter((arr: SubTasks, index: number) => {
          return index !== id;
        })
      );
    }
  };

  const statusChangeHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setStatusOption(e.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addTask({
        ID: nanoid(),
        description: descriptionInput,
        title: titleInput,
        status: statusOption,
        subtasks: subtasksArray,
      })
    );
    setTitleInput("");
    setDescriptionInput("");
    setSubtasksArray([{ title: "", isCompleted: false }]);
    setStatusOption("");
    toggleModal();
  };

  return (
    <>
      <AddTaskButton onClick={toggleModal}>
        {size.width >= 768 ? <DesktopAddTaskSVG /> : <MobileAddTaskSVG />}
      </AddTaskButton>
      <Modal isOpen={isOpen} onBackgroundClick={toggleModal}>
        <Container onSubmit={submitHandler}>
          <Heading>Add New Task</Heading>
          <InputElement>
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="e.g. Take coffee break"
              required
              value={titleInput}
              onChange={titleChangeHandler}
            />
          </InputElement>
          <InputElement>
            <Label>Description</Label>
            <TextArea
              placeholder="e.g. It's always good to take a break. This 
              15 minute break will recharge the batteries a little."
              value={descriptionInput}
              onChange={descriptionChangeHandler}
            ></TextArea>
          </InputElement>
          <InputElement>
            <Label>Subtasks</Label>
            {subtasksArray.map((subtask: SubTasks, id: number) => (
              <SubTask key={id}>
                <Input
                  type="text"
                  placeholder="e.g. Drink coffee & smile"
                  required
                  value={subtasksArray[id].title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    arrayChangeHandler(e, id)
                  }
                ></Input>
                <StyledCrossSVG onClick={() => deleteSubtaskInput(id)} />
              </SubTask>
            ))}
            <AddNewSubTask type="button" onClick={addSubtaskInput}>
              + Add New Subtask
            </AddNewSubTask>
          </InputElement>
          <InputElement>
            <Label>Status</Label>
            <Select
              value={statusOption}
              onChange={statusChangeHandler}
              required
            >
              <option disabled={true} value=""></option>
              {boards[activeBoardID].columns.map(
                (column: Columns, id: number) => (
                  <option key={id} value={column.name}>
                    {column.name}
                  </option>
                )
              )}
            </Select>
          </InputElement>
          <CreateButton>Create Task</CreateButton>
        </Container>
      </Modal>
    </>
  );
};
