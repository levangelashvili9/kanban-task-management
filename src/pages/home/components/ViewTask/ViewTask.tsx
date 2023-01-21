import Modal from "styled-react-modal";
import { SubTasks, Tasks } from "common/types/types";
import { useAppDispatch } from "redux/hooks";
import { toggleSubTaskCompleted } from "redux/slices/dataSlice";
import { TaskMenu } from "../TaskMenu";

import {
  Container,
  Heading,
  HeadingTest,
  Description,
  SubTasksContainer,
  SubHeading,
  SubTaskContainer,
  CheckBox,
  SubTaskTitle,
} from "./ViewTask.styled";

import { ReactComponent as CheckSVG } from "assets/svg/icon-check.svg";

type Props = {
  isTaskOpen: boolean;
  setIsTaskOpen: (value: boolean) => void;
  completedSubTasks: SubTasks[];
  task: Tasks;
  taskID: number;
  columnID: number;
  activeBoardID: number;
};

export const ViewTask: React.FC<Props> = ({
  isTaskOpen,
  setIsTaskOpen,
  completedSubTasks,
  task,
  activeBoardID,
  columnID,
  taskID,
}) => {
  const dispatch = useAppDispatch();

  const handleCompletedToggler = (subtaskID: number): void => {
    dispatch(
      toggleSubTaskCompleted([activeBoardID, columnID, taskID, subtaskID])
    );
  };

  return (
    <Modal isOpen={isTaskOpen} onBackgroundClick={() => setIsTaskOpen(false)}>
      <Container>
        <Heading>
          <HeadingTest>{task.title}</HeadingTest>
          <TaskMenu columnID={columnID} taskID={taskID} />
        </Heading>
        <Description>{task.description}</Description>
        <SubTasksContainer>
          <SubHeading>
            Subtasks ({completedSubTasks.length} of {task.subtasks.length})
          </SubHeading>
          {task.subtasks.map((subtask, subTaskID: number) => (
            <SubTaskContainer
              onClick={() => handleCompletedToggler(subTaskID)}
              key={subTaskID}
            >
              <CheckBox isCompleted={subtask.isCompleted}>
                {subtask.isCompleted ? <CheckSVG /> : null}
              </CheckBox>
              <SubTaskTitle isCompleted={subtask.isCompleted}>
                {subtask.title}
              </SubTaskTitle>
            </SubTaskContainer>
          ))}
        </SubTasksContainer>
      </Container>
    </Modal>
  );
};
