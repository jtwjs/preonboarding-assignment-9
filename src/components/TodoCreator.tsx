import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/reducers';

import TodoInput from 'components/TodoInput';
import TodoPriority from 'components/TodoPriority';
import Button from 'components/common/Button';

const TodoCreator: React.FC = () => {
  const { selectedTodos } = useSelector(({ todos }: RootState) => ({
    selectedTodos: todos.selectedTodos,
  }));
  return (
    <section className="todo-creator">
      <h3 className="a11y">Todo Creator</h3>
      <TodoInput />
      <TodoPriority />
      {selectedTodos.length ? (
        <Button className="btn btn-delete" onClick={() => console.log('삭제')}>
          Delete
        </Button>
      ) : (
        <Button className="btn btn-add" onClick={() => console.log('추가')}>
          Add
        </Button>
      )}
    </section>
  );
};

export default TodoCreator;
