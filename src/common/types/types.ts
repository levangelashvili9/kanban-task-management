export type SubTasks = {
  title: string;
  isCompleted: boolean;
};

export type Tasks = {
  ID: string;
  title: string;
  description: string;
  status: string;
  subtasks: SubTasks[];
};

export type Columns = {
  name: string;
  tasks: Tasks[];
};

export type Boards = {
  ID: string;
  name: string;
  columns: Columns[];
};

export type EditBoardTypes = {
  indexes: number[];
  taskdata: Tasks;
};
