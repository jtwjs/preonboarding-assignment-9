import { all, fork, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import * as types from 'store/actions/actionTypes';
import {
  setTodoRequestAction,
  addTodoRequestAction,
  checkTodoRequestAction,
  deleteTodoRequestAction,
  editTodoRequestAction,
} from 'store/actions';
import * as todosAPI from 'api/todos';
import { Todo } from 'types/todos';

function* setTodoSaga(action: ReturnType<typeof setTodoRequestAction>) {
  try {
    yield call(todosAPI.setTodo, action.payload);
    yield put({
      type: types.SET_TODO_SUCCESS,
      payload: action.payload,
    })
  } catch(err: any) {
    yield put({
      type: types.SET_TODO_FAILURE,
      payload: err.response.data,
    })
  }
}

function* getTodoSaga() {
  try {
    const response = (yield call(todosAPI.getTodo)) as AxiosResponse<Todo[]>;
    yield put({
      type: types.GET_TODO_SUCCESS,
      payload: response,
    });
  } catch (err: any) { // TODO 타입 알아내기
    yield put({
      type: types.GET_TODO_FAILURE,
      payload: err.response.data,
    });
  }
}

function* addTodoSaga(action: ReturnType<typeof addTodoRequestAction>) {
  try {
    yield call(todosAPI.addTodo, action.payload);
    yield put({
      type: types.ADD_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (err: any) { // TODO 타입 알아내기
    yield put({
      type: types.ADD_TODO_FAILURE,
      payload: err.response.data,
    });
  }
}

function* deleteTodoSaga(action: ReturnType<typeof deleteTodoRequestAction>) {
  try {
    yield call(todosAPI.deleteTodo, action.payload);
    yield put({
      type: types.DELETE_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (err: any) { // TODO 타입 알아내기
    yield put({
      type: types.DELETE_TODO_FAILURE,
      payload: err.response.data,
    });
  }
}

function* editTodoSaga(action: ReturnType<typeof editTodoRequestAction>) {
  try {
    yield call(todosAPI.editTodo, action.payload);
    yield put({
      type: types.EDIT_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (err: any) { // TODO 타입 알아내기
    yield put({
      type: types.EDIT_TODO_FAILURE,
      payload: err.response.data,
    });
  }
}

function* checkTodoSaga(action: ReturnType<typeof checkTodoRequestAction>) {
  try {
    yield call(todosAPI.checkTodo, action.payload);
    yield put({
      type: types.CHECK_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (err: any) { // TODO 타입 알아내기
    yield put({
      type: types.CHECK_TODO_FAILURE,
      payload: err.response.data,
    });
  }
}

function* watchSetTodo() {
  yield takeLatest(types.SET_TODO_REQUEST, setTodoSaga);
}

function* watchGetTodo() {
  yield takeLatest(types.GET_TODO_REQUEST, getTodoSaga);
}

function* watchAddTodo() {
  yield takeLatest(types.ADD_TODO_REQUEST, addTodoSaga);
}

function* watchDeleteTodo() {
  yield takeEvery(types.DELETE_TODO_REQUEST, deleteTodoSaga);
}

function* watchEditTodo() {
  yield takeLatest(types.EDIT_TODO_REQUEST, editTodoSaga);
}

function* watchCheckTodo() {
  yield takeLatest(types.CHECK_TODO_REQUEST, checkTodoSaga);
}

export default function* todoSaga(): Generator {
  yield all([
    fork(watchSetTodo),
    fork(watchGetTodo),
    fork(watchAddTodo),
    fork(watchDeleteTodo),
    fork(watchEditTodo),
    fork(watchCheckTodo),
  ]);
}
