import { Task } from "../types/Task";

// FOR EXAMPLE PURPOSES, since we don't have a database, we just make our own array to represent the database of all tasks.
let tasks: Task[] = [
  {
    id: 1,
    name: "Mission 01",
    description: "Chatbot",
    isCompleted: false,
  },
];

export const getAllTasks = () => {
  // // In TDD, we start writing functions/components with nothing and create the test first
  // throw new Error('Not Implemented')
  return tasks;
};

interface createTaskInput {
  name: string;
  description: string;
}

export const createTask = (input: createTaskInput) => {
  //   throw new Error("Not Implemented");

  const newTask = {
    id: tasks.length + 1,
    name: input.name,
    description: input.description,
    isCompleted: false,
  };

  tasks.push(newTask);

  return newTask;
};

export const getOneTask = (taskId: number) => {
  const matchedTask = tasks.find((t) => t.id === taskId);

  if (!matchedTask) {
    throw new Error("Task not found");
  }

  return matchedTask;
};
