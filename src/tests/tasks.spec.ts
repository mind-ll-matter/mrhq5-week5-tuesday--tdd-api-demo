// import test, { describe } from 'node:test';
import { getAllTasks, createTask, getOneTask } from "../services/taskService";
import { Task } from "../types/Task";

// tasks api to return one sample task bu default

describe("getAllTasks", () => {
  test("should return default task", () => {
    // Arrange
    const expected = [
      {
        id: 1,
        name: "Mission 01",
        description: "Chatbot",
        isCompleted: false,
      },
    ];

    // Act
    const actual = getAllTasks();

    // Assert
    expect(actual).toEqual(expected);
  });
});

describe("should create a task", () => {
  test("create a task called mission 2 with description NLP", () => {
    // Arrange
    const input = {
      name: "Mission 02",
      description: "NLP",
    };
    const expected = {
      id: 2,
      name: "Mission 02",
      description: "NLP",
      isCompleted: false,
    };

    // Act
    const actual = createTask(input);

    // Assert
    expect(actual).toEqual(expected);
  });
});

// tasks api to return a task by its id

describe("getOneTask", () => {
  test("should return task 1 by Id", () => {
    // Arrange
    const input = 1;
    const expected = {
      id: 1,
      name: "Mission 01",
      description: "Chatbot",
      isCompleted: false,
    };

    // Act
    const actual = getOneTask(input);

    // Assert
    expect(actual).toEqual(expected);
  });

  test("should return task 2", () => {
    // Arrange
    const input = 2;
    const expected = {
      id: 2,
      name: "Mission 02",
      description: "NLP",
      isCompleted: false,
    };

    // Act
    const actual = getOneTask(input);

    // Assert
    expect(actual).toEqual(expected);
  });
});
