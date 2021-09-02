import * as types from 'store/actions/actionTypes';
import { Todo } from 'types/todos';

export const getTodoRequestAction = () => {
  return <const>{
    type: types.GET_TODO_REQUEST,
  };
};

export const getTodoSuccessAction = (payload: Todo[]) => {
  return <const>{
    type: types.GET_TODO_SUCCESS,
    payload,
  };
};

export const getTodoFailureAction = (payload: string) => {
  return <const>{
    type: types.GET_TODO_FAILURE,
    payload,
  };
};

export const addTodoRequestAction = (payload: Todo) => {
  return <const>{
    type: types.ADD_TODO_REQUEST,
    payload,
  };
};

export const addTodoSuccessAction = (payload: Todo) => {
  return <const>{
    type: types.ADD_TODO_SUCCESS,
    payload,
  };
};

export const addTodoFailureAction = (payload: string) => {
  return <const>{
    type: types.ADD_TODO_FAILURE,
    payload,
  };
};

export const deleteTodoRequestAction = (payload: Todo['id']) => {
  return <const>{
    type: types.DELETE_TODO_REQUEST,
    payload,
  };
};

export const deleteTodoSuccessAction = (payload: Todo['id']) => {
  return <const>{
    type: types.DELETE_TODO_SUCCESS,
    payload,
  };
};

export const deleteTodoFailureAction = (payload: string) => {
  return <const>{
    type: types.DELETE_TODO_FAILURE,
    payload,
  };
};

export const editTodoRequestAction = (payload: Todo) => {
  return <const>{
    type: types.EDIT_TODO_REQUEST,
    payload,
  };
};

export const editTodoSuccessAction = (payload: Todo) => {
  return <const>{
    type: types.EDIT_TODO_SUCCESS,
    payload,
  };
};

export const editTodoFailureAction = (payload: string) => {
  return <const>{
    type: types.EDIT_TODO_FAILURE,
    payload,
  };
};

export const checkTodoRequestAction = (payload: Todo['id']) => {
  return <const>{
    type: types.CHECK_TODO_REQUEST,
    payload,
  };
};

export const checkTodoSuccessAction = (payload: Todo['id']) => {
  return <const>{
    type: types.CHECK_TODO_SUCCESS,
    payload,
  };
};

export const checkTodoFailureAction = (payload: string) => {
  return <const>{
    type: types.CHECK_TODO_FAILURE,
    payload,
  };
};

export const selectTodoItemAction = (payload: Todo['id']) => {
  return <const>{
    type: types.SELECT_TODO_ITEM,
    payload,
  };
};

export const unselectTodoItemAction = (payload: Todo['id']) => {
  return <const>{
    type: types.UNSELECT_TODO_ITEM,
    payload,
  };
};

export type TodoAction =
  | ReturnType<typeof getTodoRequestAction>
  | ReturnType<typeof getTodoSuccessAction>
  | ReturnType<typeof getTodoFailureAction>
  | ReturnType<typeof addTodoRequestAction>
  | ReturnType<typeof addTodoSuccessAction>
  | ReturnType<typeof addTodoFailureAction>
  | ReturnType<typeof deleteTodoRequestAction>
  | ReturnType<typeof deleteTodoSuccessAction>
  | ReturnType<typeof deleteTodoFailureAction>
  | ReturnType<typeof editTodoRequestAction>
  | ReturnType<typeof editTodoSuccessAction>
  | ReturnType<typeof editTodoFailureAction>
  | ReturnType<typeof checkTodoRequestAction>
  | ReturnType<typeof checkTodoSuccessAction>
  | ReturnType<typeof checkTodoFailureAction>
  | ReturnType<typeof selectTodoItemAction>
  | ReturnType<typeof unselectTodoItemAction>;
