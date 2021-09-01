import React from 'react';

type TodoWrapProps = {
  title: string;
};

const TodoWrap: React.FC<TodoWrapProps> = ({ children, title }) => {
  return (
    <section className="todo-wrap">
      <h3 className="todo-wrap-title">{title}</h3>
      <ul className="todo-wrap-list">{children}</ul>
    </section>
  );
};

export default TodoWrap;
