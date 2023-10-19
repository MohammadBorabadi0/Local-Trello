import { Column, Task } from "../types";

const defaultCols: Column[] = [
  {
    id: "todo",
    title: "Todo",
  },
  {
    id: "doing",
    title: "Work in progress",
  },
  {
    id: "done",
    title: "Done",
  },
];

const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "todo",
    content: "Task-1",
  },
  {
    id: "2",
    columnId: "todo",
    content:
      "Task-2",
  },
  {
    id: "3",
    columnId: "doing",
    content: "Task-3",
  },
  {
    id: "4",
    columnId: "doing",
    content: "Task-4",
  },
  {
    id: "5",
    columnId: "done",
    content: "Task-5",
  },
  {
    id: "6",
    columnId: "done",
    content: "Task-6",
  },
  {
    id: "7",
    columnId: "done",
    content: "Task-7",
  },
  {
    id: "8",
    columnId: "todo",
    content: "Task-8",
  },
  {
    id: "9",
    columnId: "todo",
    content: "Task-9",
  },
  {
    id: "10",
    columnId: "todo",
    content: "Task-10",
  },
  {
    id: "11",
    columnId: "todo",
    content: "Task-11",
  },
  {
    id: "12",
    columnId: "doing",
    content: "Task-12",
  },
  {
    id: "13",
    columnId: "doing",
    content: "Task-13",
  },
];

export { defaultCols, defaultTasks };
