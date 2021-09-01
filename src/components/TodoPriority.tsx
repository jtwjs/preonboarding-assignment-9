import React from 'react';

import TodoForm from 'components/common/TodoForm';
import Radio from 'components/common/Radio';
import type { Priority } from 'types/todos';

type TodoPriorityProps = {
  priority: Priority;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const priorityTable = {
  high: '우선순위 높음',
  middle: '우선순위 보통',
  low: '우선순위 낮음',
  lowest: '우선순위 가장낮음',
};

const TodoPriority: React.FC<TodoPriorityProps> = ({ priority, onChange }) => {
  return (
    <TodoForm label="Priority">
      <div className="radio-group">
        {Object.entries(priorityTable).map(([key, value]) => (
          <Radio
            key={key}
            id={key}
            name="priority"
            value={key as Priority}
            checked={priority === key}
            onChange={onChange}
          >
            <span className="a11y">{value}</span>
          </Radio>
        ))}
      </div>
    </TodoForm>
  );
};

export default TodoPriority;
