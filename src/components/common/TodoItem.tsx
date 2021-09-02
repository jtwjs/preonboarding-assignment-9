import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import type { Priority, Todo } from 'types/todos';
import type { RootState } from 'store/reducers';
import { selectTodoItemAction, unselectTodoItemAction } from 'store/actions';

type TodoItemProps = {
  id: Todo['id'];
  priority: Priority;
  contents: string;
};

const priorityLabelTable = {
  high: 'A',
  middle: 'B',
  low: 'C',
  lowest: 'D',
};

const TodoItem: React.FC<TodoItemProps> = ({ id, priority, contents }) => {
  const { selectedTodos } = useSelector(({ todos }: RootState) => ({
    selectedTodos: todos.selectedTodos,
  }));
  const dispatch = useDispatch();

  const clickHandler = (id: Todo['id']) => {
    selectedTodos.includes(id)
      ? dispatch(unselectTodoItemAction(id))
      : dispatch(selectTodoItemAction(id));
  };

  return (
    <li
      className={classNames('todo-item', {
        checked: selectedTodos.includes(id),
      })}
      onClick={() => clickHandler(id)}
    >
      <div className={classNames('todo-item-priority', priority)}>
        {priorityLabelTable[priority]}
      </div>
      <div className="todo-item-content">{contents}</div>
      <span className="todo-item-checked"></span>
    </li>
  );
};

export default TodoItem;
