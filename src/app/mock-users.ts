import { User } from './user';

export const USERS: User[] = [
  { id: 1, name: 'User1', password:'111', todoList:[{purchase: "buy bread", done: false}, { purchase: "buy cheese", done: true}, { purchase: "buy salt", done: false}] },
  { id: 2, name: 'User2' ,  password:'112', todoList:[{purchase: "buy bread", done: false}] },
  { id: 3, name: 'User3',  password:'113', todoList:[{purchase: "buy bread", done: false}, { purchase: "buy salt", done: false}] },
  { id: 4, name: 'User4', password:'114', todoList:[{ purchase: "buy cheese", done: false}] }
];
