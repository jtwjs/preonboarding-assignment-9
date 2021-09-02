import React from 'react';

import TodoForm from 'components/common/TodoForm';

type TodoInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ ...restProps }) => {
  return (
    <TodoForm id="todo-input" label="Write To-do">
      <div className="input-group">
        <i className="ic-write" aria-hidden="true"></i>
        <input className="form-input" id="todo-input" {...restProps} />
      </div>
    </TodoForm>
  );
};

export default TodoInput;
