import React from 'react';
import classNames from 'classnames';

type TodoFormProps = {
  id?: string;
  label: string;
};

const TodoForm: React.FC<TodoFormProps> = ({ children, id, label }) => {
  return (
    <div className="form-box">
      <h4 className={classNames('form-box-label', { a11y: id })}>{label}</h4>
      {id && (
        <label className="form-box-label" htmlFor={id}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

export default TodoForm;
