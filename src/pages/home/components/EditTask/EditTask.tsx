import { useState } from "react";
import Modal from "styled-react-modal";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import { SubTasks, Tasks } from "common/types/types";
import { editTask } from "redux/slices/dataSlice";

import {
  Container,
  Heading,
  InputElement,
  Label,
  Input,
  TextArea,
  SubTask,
  StyledCrossSVG,
  AddNewSubTask,
  CreateButton,
} from "common/styles/ModifyTasks.styled";

type Props = {
  editTaskOpen: boolean;
  toggleEditTask: () => void;
  columnID: number;
  taskID: number;
};

export const EditTask: React.FC<Props> = ({
  editTaskOpen,
  toggleEditTask,
  columnID,
  taskID,
}) => {
  const { boards, currentBoard } = useAppSelector((state) => state.data);
  const activeBoardID = boards.findIndex((board) => board.ID === currentBoard);
  const activeTask: Tasks =
    boards[activeBoardID].columns[columnID].tasks[taskID];

  const dispatch = useAppDispatch();

  const [titleInput, setTitleInput] = useState<string>(activeTask.title);
  const [descriptionInput, setDescriptionInput] = useState<string>(
    activeTask.description
  );
  const [subtasksArray, setSubtasksArray] = useState<SubTasks[]>(
    activeTask.subtasks
  );

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

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      editTask({
        indexes: [columnID, taskID],
        taskdata: {
          ID: activeTask.ID,
          description: descriptionInput,
          title: titleInput,
          status: activeTask.status,
          subtasks: subtasksArray,
        },
      })
    );
    toggleEditTask();
  };

  return (
    <Modal isOpen={editTaskOpen} onBackgroundClick={toggleEditTask}>
      <Container onSubmit={submitHandler}>
        <Heading>Edit Task</Heading>
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
        <CreateButton>Save Changes</CreateButton>
      </Container>
    </Modal>
  );
};
