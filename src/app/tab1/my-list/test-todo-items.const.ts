import { TodoItem } from "./todo-item.interface";

export const TEST_TODO_ITEMS: TodoItem[] = [
  {
    title: "Buy milk",
    done: false,
    priority: 1,
  },
  {
    title: "Do taxes",
    deadline: new Date(2020, 11),
    done: false,
    priority: 2,
  },
  {
    title: "Do homework",
    deadline: new Date(2020, 4),
    done: false,
  },
  {
    title: "Feed the cat",
    deadline: new Date(2020, 4),
    done: false,
    priority: 1,
  },
  {
    title: "Buy bread",
    done: true,
  },
];
