import React, { useState, useCallback } from 'react';

import Layout from 'layout';
import TodoCreator from 'components/TodoCreator';
import TodoProgress from 'components/TodoProgress';
import TodoWrap from 'components/common/TodoWrap';
import TodoItem from 'components/common/TodoItem';

const Home: React.FC = () => {
  const [selectedTodoIds, setSelectedTodoIds] = useState<string[]>([]);

  const handleToggleTodo = useCallback(
    (id: string) => {
      const isSelected = selectedTodoIds.includes(id);
      isSelected
        ? setSelectedTodoIds((prev) => prev.filter((item) => item !== id))
        : setSelectedTodoIds((prev) => [...prev, id]);
    },
    [selectedTodoIds],
  );

  return (
    <Layout>
      <section className="section todo-section">
        <h2 className="a11y">Todo List</h2>
        <div className="content-top">
          <TodoCreator />
          <TodoProgress />
        </div>
        <div className="content-bottom">
          <TodoWrap title="In-Progress">
            <TodoItem
              id="1"
              priority="high"
              contents="content!"
              selectedTodoIds={selectedTodoIds}
              clickHandler={handleToggleTodo}
            />
            <TodoItem
              id="2"
              priority="middle"
              contents="content!"
              selectedTodoIds={selectedTodoIds}
              clickHandler={handleToggleTodo}
            />
            <TodoItem
              id="3"
              priority="low"
              contents="content!"
              selectedTodoIds={selectedTodoIds}
              clickHandler={handleToggleTodo}
            />
          </TodoWrap>
          <TodoWrap title="Done">
            <TodoItem
              id="0"
              priority="lowest"
              contents="Done content!"
              selectedTodoIds={selectedTodoIds}
              clickHandler={handleToggleTodo}
            />
          </TodoWrap>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
