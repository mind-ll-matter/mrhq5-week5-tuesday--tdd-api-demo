import * as taskService from "../services/taskService";
import { Request, Response } from "express";

export const getAllTasks = (req: Request, res: Response) => {
  const tasks = taskService.getAllTasks();
  res.send(tasks);
};
