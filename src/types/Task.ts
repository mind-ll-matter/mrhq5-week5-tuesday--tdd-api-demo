// we create an interface to represent each task for our tasks array so that we satistfy typescript
export interface Task {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}
