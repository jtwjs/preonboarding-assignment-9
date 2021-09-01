import React from 'react';

import ProgressBar from 'components/common/ProgressBar';

const TodoProgress: React.FC = (props) => {
  return (
    <section className="todo-progress">
      <ProgressBar max={24} value={5} />
      <div className="progress-text">
        <h3>Progress</h3>
        <strong>5/24 complete</strong>
      </div>
    </section>
  );
};

export default TodoProgress;
