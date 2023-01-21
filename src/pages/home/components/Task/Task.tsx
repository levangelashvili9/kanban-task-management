import { useState } from "react";
import { Tasks, SubTasks } from "common/types/types";

import { ViewTask } from "../ViewTask";
import { Container, Heading, SubTasksContainer } from "./Task.styled";

type Props = {
  task: Tasks;
  taskID: number;
  columnID: number;
  activeBoardID: number;
};

export const Task: React.FC<Props> = ({
  task,
  taskID,
  columnID,
  activeBoardID,
}) => {
  const [isTaskOpen, setIsTaskOpen] = useState<boolean>(false);

  const completedSubTasks = task.subtasks.filter(
    (subtask: SubTasks) => subtask.isCompleted
  );

  return (
    <>
      <Container onClick={() => setIsTaskOpen(true)}>
        <Heading>{task.title}</Heading>
        <SubTasksContainer>
          {completedSubTasks.length} of {task.subtasks.length} substasks
        </SubTasksContainer>
      </Container>
      <ViewTask
        isTaskOpen={isTaskOpen}
        setIsTaskOpen={setIsTaskOpen}
        completedSubTasks={completedSubTasks}
        task={task}
        taskID={taskID}
        columnID={columnID}
        activeBoardID={activeBoardID}
      />
    </>
  );
};
