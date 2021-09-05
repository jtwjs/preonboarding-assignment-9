import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { TargetIdRef } from 'types/todos';
import { checkTodoRequestAction, setTodoRequestAction } from 'store/actions';
import { RootState } from 'store/reducers';

type TodoWrapProps = {
  category: string;
  dragTargetId: { current: TargetIdRef };
  dropTargetId: { current: TargetIdRef };
  handleDropped: (isDropped: boolean) => void;
};

const TodoWrap: React.FC<TodoWrapProps> = ({
  children,
  category,
  dragTargetId,
  dropTargetId,
  handleDropped,
}) => {
  const dispatch = useDispatch();
  const { todos } = useSelector(({ todos }: RootState) => ({
    todos: todos.todos,
  }));

  const isDifferentCategory = (category: string, isCheck: boolean): boolean => {
    const isDone = category.toLowerCase() === 'done';

    return isDone !== isCheck;
  };

  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    const { id: dragId, isCheck } = dragTargetId.current;
    const { id: dropId } = dropTargetId.current;
    e.preventDefault();

    if (isDifferentCategory(category, isCheck)) {
      dispatch(checkTodoRequestAction(dragId));
    }

    if (!dropId) {
      return;
    }
    if (dragId && dragId !== dropId) {
      const dragTargetIdx = todos.findIndex((todo) => todo.id === dragId);
      const dropTargetIdx = todos.findIndex((todo) => todo.id === dropId);
      const dragTarget = todos.splice(dragTargetIdx, 1);
      if (dragTargetIdx > dropTargetIdx) {
        dropTargetIdx === 0
          ? todos.unshift(dragTarget[0])
          : todos.splice(dropTargetIdx - 1, 0, dragTarget[0]);
      } else {
        todos.splice(dropTargetIdx, 0, dragTarget[0]);
      }
      dispatch(setTodoRequestAction(todos));
    }

    handleDropped(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
  };

  return (
    <section className="todo-wrap">
      <h3 className="todo-wrap-title">{category}</h3>
      <ul
        className="todo-wrap-list"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {children}
      </ul>
    </section>
  );
};

export default TodoWrap;
