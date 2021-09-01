import React from 'react';

import { Priority } from 'components/TodoPriority';
import classNames from "classnames";

type TodoItemProps = {
  priority: Priority;
  contents: string;
};

const priorityLabelTable = {
  high: 'A',
  middle: 'B',
  low: 'C',
  lowest: 'D',
};

const TodoItem: React.FC<TodoItemProps> = ({ priority, contents }) => {
  return (
    <li className="todo-item">
      <div className={classNames('todo-item-priority', priority)}>
        {priorityLabelTable[priority]}
      </div>
      <div className="todo-item-content">{contents}</div>
      <span className="todo-item-checked"></span>
    </li>
  );
};

export default TodoItem;
