import React from 'react';

import TodoForm from 'components/common/TodoForm';

const TodoInput: React.FC = (props) => {
  return (
    <TodoForm id="todo-input" label="Write To-do">
      <div className="input-group">
        <i className="ic-write" aria-hidden="true"></i>
        <input className="form-input" id="todo-input" />
      </div>
    </TodoForm>
  );
};

export default TodoInput;
