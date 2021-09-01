import * as types from 'store/actions/actionTypes';
import { Todo } from 'types/todos';

export const addTodoItem = (payload: Todo) => {
  return <const>{
    type: types.ADD_TODO_ITEM,
    payload,
  };
};

export const deleteTodoItem = (payload: Todo['id'][]) => {
  return <const>{
    type: types.DELETE_TODO_ITEM,
    payload,
  };
};

export const editTodoItem = (payload: Todo) => {
  return <const>{
    type: types.EDIT_TODO_ITEM,
    payload,
  };
};

export const checkTodoItem = (payload: Todo['id']) => {
  return <const>{
    type: types.CHECK_TODO_ITEM,
    payload,
  };
};

export const selectTodoItem = (payload: Todo['id']) => {
  return <const>{
    type: types.SELECT_TODO_ITEM,
    payload,
  };
};

export const unselectTodoItem = (payload: Todo['id']) => {
  return <const>{
    type: types.UNSELECT_TODO_ITEM,
    payload,
  };
};

export type TodoAction =
  | ReturnType<typeof addTodoItem>
  | ReturnType<typeof deleteTodoItem>
  | ReturnType<typeof editTodoItem>
  | ReturnType<typeof checkTodoItem>
  | ReturnType<typeof selectTodoItem>
  | ReturnType<typeof unselectTodoItem>;
