import { Task } from "../Task";
import { Columns, Tasks } from "common/types/types";

import {
  Container,
  Heading,
  Circle,
  HeadingText,
  Content,
} from "./Column.styled";

type Props = {
  column: Columns;
  columnID: number;
  activeBoardID: number;
};

export const Column: React.FC<Props> = ({
  column,
  columnID,
  activeBoardID,
}) => {
  return (
    <Container>
      <Heading>
        <Circle />
        <HeadingText>
          {column.name} ({column.tasks.length})
        </HeadingText>
      </Heading>
      <Content>
        {column.tasks.map((task: Tasks, taskID: number) => (
          <Task
            task={task}
            taskID={taskID}
            columnID={columnID}
            activeBoardID={activeBoardID}
            key={taskID}
          />
        ))}
      </Content>
    </Container>
  );
};
