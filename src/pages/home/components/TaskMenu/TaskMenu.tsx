import { useState } from "react";
import { DeleteTask } from "../DeleteTask";
import { EditTask } from "../EditTask";

import { StyledEllipsisSVG, Container, Edit, Delete } from "./TaskMenu.styled";

type Props = {
  columnID: number;
  taskID: number;
};

export const TaskMenu: React.FC<Props> = ({ taskID, columnID }) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [editTaskOpen, setEditTaskOpen] = useState<boolean>(false);

  const toggleDelete = () => {
    setIsDeleteOpen((prev) => !prev);
  };

  const toggleEditTask = () => {
    setEditTaskOpen((prev) => !prev);
  };

  return (
    <>
      <StyledEllipsisSVG onClick={() => setIsHidden((prev) => !prev)} />
      {isHidden ? null : (
        <Container>
          <Edit>
            <h3 onClick={toggleEditTask}>Edit Task</h3>
            <EditTask
              editTaskOpen={editTaskOpen}
              toggleEditTask={toggleEditTask}
              columnID={columnID}
              taskID={taskID}
            />
          </Edit>
          <Delete>
            <h3 onClick={toggleDelete}>Delete Task</h3>
            <DeleteTask
              isDeleteOpen={isDeleteOpen}
              toggleDelete={toggleDelete}
              columnID={columnID}
              taskID={taskID}
            />
          </Delete>
        </Container>
      )}
    </>
  );
};
