import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Boards, Tasks, EditBoardTypes } from "common/types/types";

type InitialState = {
  boards: Boards[];
  currentBoard: string;
};

const initialState: InitialState = {
  boards: [
    {
      ID: "sdkiosdosdssxi322",
      name: "Platform Launch",
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              ID: "asdxasjnxiajsxawaw2",
              title: "Build UI for search",
              description: "dsaas",
              status: "Todo",
              subtasks: [
                {
                  title: "Search page",
                  isCompleted: true,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      ID: "sdsdsixjn273278s",
      name: "Launch",
      columns: [
        {
          name: "Todo",
          tasks: [
            {
              ID: "asd21daxasjnxiajsxawaw2",
              title: "Build UI",
              description: "",
              status: "Todo",
              subtasks: [
                {
                  title: "Search page",
                  isCompleted: false,
                },
                {
                  title: "Search page",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  currentBoard: "sdkiosdosdssxi322",
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    changeCurrentBoard: (state, { payload }: PayloadAction<string>) => {
      state.currentBoard = payload;
    },

    addBoard: (state, { payload }: PayloadAction<Boards>) => {
      state.boards.push(payload);
    },

    editBoard: (state, { payload }: PayloadAction<Boards>) => {
      const currentBoard = state.currentBoard;
      const activeBoardID = state.boards.findIndex(
        (board) => board.ID === currentBoard
      );

      state.boards.splice(activeBoardID, 1, payload);
    },

    deleteBoard: (state) => {
      const activeBoardID = state.boards.findIndex(
        (board) => board.ID === state.currentBoard
      );

      state.boards.splice(activeBoardID, 1);
      state.currentBoard = state.boards[0].ID;
    },

    addTask: (state, { payload }: PayloadAction<Tasks>) => {
      const activeBoardID = state.boards.findIndex(
        (board) => board.ID === state.currentBoard
      );
      const activeColumnID = state.boards[activeBoardID].columns.findIndex(
        (column) => column.name === payload.status
      );

      state.boards[activeBoardID].columns[activeColumnID].tasks.push(payload);
    },

    deleteTask: (state, { payload }: PayloadAction<number[]>) => {
      const activeBoardID = state.boards.findIndex(
        (board) => board.ID === state.currentBoard
      );

      state.boards[activeBoardID].columns[payload[0]].tasks.splice(
        payload[1],
        1
      );
    },

    editTask: (state, { payload }: PayloadAction<EditBoardTypes>) => {
      const activeBoardID = state.boards.findIndex(
        (board) => board.ID === state.currentBoard
      );
      const columnID = payload.indexes[0];
      const taskID = payload.indexes[1];
      const activeTasks = state.boards[activeBoardID].columns[columnID].tasks;

      activeTasks.splice(taskID, 1, payload.taskdata);
    },

    toggleSubTaskCompleted: (state, { payload }: PayloadAction<number[]>) => {
      let subtask =
        state.boards[payload[0]].columns[payload[1]].tasks[payload[2]].subtasks[
          payload[3]
        ];
      subtask.isCompleted = !subtask.isCompleted;
    },
  },
});

export const {
  changeCurrentBoard,
  addBoard,
  editBoard,
  deleteBoard,
  addTask,
  deleteTask,
  editTask,
  toggleSubTaskCompleted,
} = dataSlice.actions;

export default dataSlice.reducer;
