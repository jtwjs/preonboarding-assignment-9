import React from 'react';

import TodoForm from 'components/common/TodoForm';
import Radio from 'components/common/Radio';

const priorityTable = {
  high: '우선순위 높음',
  middle: '우선순위 보통',
  low: '우선순위 낮음',
  lowest: '우선순위 가장낮음',
};

export type Priority = 'high' | 'middle' | 'low' | 'lowest';

const TodoPriority: React.FC = (props) => {
  return (
    <TodoForm label="Priority">
      <div className="radio-group">
        {Object.entries(priorityTable).map(([key, value]) => (
          <Radio
            key={key}
            id={key}
            priority={key as Priority}
            name='priority'
            value={key}
            checked={true}
            onChange={(e) => console.log(e.target)}
          >
            <span className="a11y">{value}</span>
          </Radio>
        ))}
      </div>
    </TodoForm>
  );
};

export default TodoPriority;
