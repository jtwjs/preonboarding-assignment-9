import React, { useState } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import type { Priority, Todo, TargetIdRef } from 'types/todos';
import type { RootState } from 'store/reducers';
import { selectTodoItemAction, unselectTodoItemAction } from 'store/actions';

type TodoItemProps = {
  id: Todo['id'];
  priority: Priority;
  contents: string;
  isCheck: boolean;
  mute: boolean;
  isDropped: boolean;
  handleMute: (state: boolean) => void;
  handleDropped: (isDropped: boolean) => void;
  dragTargetId: { current: TargetIdRef };
  dropTargetId: { current: TargetIdRef };
};

type DragState = 'start' | 'stop' | 'enter' | 'leave';

type DragStateListener = (targetId: Todo['id'], state: DragState) => void;

const priorityLabelTable = {
  high: 'A',
  middle: 'B',
  low: 'C',
  lowest: 'D',
};

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  priority,
  contents,
  isCheck,
  mute,
  isDropped,
  handleMute,
  handleDropped,
  dragTargetId,
  dropTargetId,
}) => {
  const [isLifted, setIsLifted] = useState<boolean>(false);
  const { selectedTodos } = useSelector(({ todos }: RootState) => ({
    selectedTodos: todos.selectedTodos,
  }));
  const dispatch = useDispatch();

  const handleClick = (id: Todo['id']) => {
    selectedTodos.includes(id)
      ? dispatch(unselectTodoItemAction(id))
      : dispatch(selectTodoItemAction(id));
  };

  const handleDragStart = (_: React.DragEvent<HTMLLIElement>) => {
    notifyDragObservers(id, 'start');1
  };

  const handleDragEnd = (_: React.DragEvent<HTMLLIElement>) => {
    notifyDragObservers(id, 'stop');
  };

  const handleDragEnter = (_: React.DragEvent<HTMLLIElement>) => {
    notifyDragObservers(id, 'enter');
  };

  const handleDragLeve = (_: React.DragEvent<HTMLLIElement>) => {
    notifyDragObservers(id, 'leave');
  };

  const notifyDragObservers: DragStateListener = (targetId, state) => {
    switch (state) {
      case 'start':
        dragTargetId.current = {
          id: targetId,
          isCheck,
        };
        handleMute(true);
        setIsLifted(true);
        break;

      case 'stop':
        dragTargetId.current = {
          id: 0,
          isCheck,
        };
        handleMute(false);
        setIsLifted(false);
        break;

      case 'enter':
        dropTargetId.current = {
          id: targetId,
          isCheck,
        };
        handleDropped(true);
        break;

      case 'leave':
        dropTargetId.current = {
          id: 0,
          isCheck,
        };
        handleDropped(false);
        break;

      default:
        new Error(`is not valid state: ${state}`);
    }
  };

  return (
    <li
      className={classNames('todo-item', {
        checked: selectedTodos.includes(id),
        mute: mute,
        lifted: isLifted,
        'drop-area': isDropped && dropTargetId.current.id === id,
      })}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeve}
      onClick={() => handleClick(id)}
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
