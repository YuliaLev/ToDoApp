import { User } from './user';

export const USERS: User[] = [
  { id: 1, name: 'User1', email: 'test1@test.ru', role_id: 0, password:'111', todoList:[{todo_id: 1, date: 1504457537836, description: "buy bread", done: false}, {todo_id: 2, date: 1504457567836, description: "buy cheese", done: true}, {todo_id: 3, date: 150445753536, description: "buy salt", done: false}] },
  { id: 2, name: 'User2', email: 'test2@test.ru', role_id: 0, password:'112', todoList:[{todo_id: 1, date: 1504457537836, description: "buy bread", done: false}] },
  { id: 3, name: 'User3', email: 'test3@test.ru', role_id: 0, password:'113', todoList:[{todo_id: 1, date: 1504457537836, description: "buy bread", done: false}, {todo_id: 2, date: 1504457537836, description: "buy bread", done: false}] },
  { id: 4, name: 'User4', email: 'test4@test.ru', role_id: 0, password:'114', todoList:[{todo_id: 1, date: 1504457537836, description: "buy bread", done: false}] }
];
