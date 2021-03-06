import axios, { AxiosResponse } from 'axios';

import { Todo } from 'types/todos';

const httpClient = axios.create({
  baseURL: 'https://a5335892-c225-4019-bf8b-580e42f1977d.mock.pstmn.io/',
});

export const getTodo = async (): Promise<AxiosResponse> => {
  const {
    data: { todoList },
  } = await httpClient.get('todo');
  return todoList;
};

export const setTodo = async (todos: Todo[]): Promise<AxiosResponse> => {
  const { data } = await httpClient.post('todo/set', todos);

  return data;
};

export const addTodo = async (todo: Todo): Promise<AxiosResponse> => {
  const { data } = await httpClient.post('todo/add', todo);

  return data;
};

export const deleteTodo = async (id: Todo['id']): Promise<AxiosResponse> => {
  const { data } = await httpClient.post(`todo/delete/${id}`);

  return data;
};

export const editTodo = async (todo: Todo): Promise<AxiosResponse> => {
  const { data } = await httpClient.post(`todo/edit/${todo.id}`, todo);

  return data;
};

export const checkTodo = async (id: Todo['id']): Promise<AxiosResponse> => {
  const { data } = await httpClient.post(`todo/check/${id}`);

  return data;
};
