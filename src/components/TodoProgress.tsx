import React from 'react';
import { useSelector } from 'react-redux';

import ProgressBar from 'components/common/ProgressBar';
import {RootState} from "../store/reducers";

const TodoProgress: React.FC = () => {
  const {max, value} = useSelector(({todos}: RootState) => ({
    max: todos.todos.length,
    value: todos.todos.filter(todo => todo.isCheck).length,
  }));

  return (
    <section className="todo-progress">
      <ProgressBar max={max} value={value} />
      <div className="progress-text">
        <h3>Progress</h3>
        <strong>{`${value}/${max} complete`}</strong>
      </div>
    </section>
  );
};

export default TodoProgress;
