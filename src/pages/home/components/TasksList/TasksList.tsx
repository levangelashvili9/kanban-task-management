import { Container } from "./TasksList.styled";
import { Column } from "../Column";
import { useAppSelector } from "redux/hooks";
import { Columns } from "common/types/types";

export const TasksList = () => {
  const { isBarShowed } = useAppSelector((state) => state.bar);
  const { boards, currentBoard } = useAppSelector((state) => state.data);

  const activeBoardID = boards.findIndex((board) => board.ID === currentBoard);

  return (
    <Container isBarShowed={isBarShowed ? true : false}>
      {boards[activeBoardID].columns.map(
        (column: Columns, columnID: number) => (
          <Column
            column={column}
            columnID={columnID}
            activeBoardID={activeBoardID}
            key={columnID}
          />
        )
      )}
    </Container>
  );
};
