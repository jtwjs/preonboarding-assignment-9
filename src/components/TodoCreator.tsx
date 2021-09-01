import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Priority, Todo } from 'types/todos';
import { RootState } from 'store/reducers';
import { addTodoItem, deleteTodoItem } from 'store/actions';

import TodoInput from 'components/TodoInput';
import TodoPriority from 'components/TodoPriority';
import Button from 'components/common/Button';

const TodoCreator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('high');
  const { selectedTodos } = useSelector(({ todos }: RootState) => ({
    selectedTodos: todos.selectedTodos,
  }));
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );

  const handlePriorityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPriority(e.target.value as Priority);
    },
    [],
  );

  const handleAddTodo = useCallback(() => {
    if (!inputValue) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      priority,
      content: inputValue,
      isCheck: false,
      createdAt: new Date(),
    };

    dispatch(addTodoItem(newTodo));
    setInputValue('');
  }, [inputValue, priority]);

  const handleDeleteTodo = useCallback(() => {
    dispatch(deleteTodoItem(selectedTodos));
  }, [selectedTodos]);

  return (
    <section className="todo-creator">
      <h3 className="a11y">Todo Creator</h3>
      <TodoInput value={inputValue} onChange={handleInputChange} />
      <TodoPriority priority={priority} onChange={handlePriorityChange} />
      {selectedTodos.length ? (
        <Button className="btn btn-delete" onClick={handleDeleteTodo}>
          Delete
        </Button>
      ) : (
        <Button className="btn btn-add" onClick={handleAddTodo}>
          Add
        </Button>
      )}
    </section>
  );
};

export default TodoCreator;
