import React from 'react';
import classNames from "classnames";

import { Priority } from 'components/TodoPriority';

type TodoItemProps = {
	id: string;
  priority: Priority;
  contents: string;
  selectedTodoIds: string[];
  clickHandler: (id: string) => void;
};

const priorityLabelTable = {
  high: 'A',
  middle: 'B',
  low: 'C',
  lowest: 'D',
};

const TodoItem: React.FC<TodoItemProps> = ({id, priority, contents, selectedTodoIds, clickHandler}) => {

  return (
    <li className={classNames("todo-item", {'checked': selectedTodoIds.includes(id)})} onClick={() => clickHandler(id)}>
      <div className={classNames('todo-item-priority', priority)}>
        {priorityLabelTable[priority]}
      </div>
      <div className="todo-item-content">{contents}</div>
      <span className="todo-item-checked"></span>
    </li>
  );
};

export default TodoItem;
