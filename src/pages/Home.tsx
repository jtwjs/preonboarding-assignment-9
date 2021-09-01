import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/reducers';

import Layout from 'layout';
import TodoCreator from 'components/TodoCreator';
import TodoProgress from 'components/TodoProgress';
import TodoWrap from 'components/common/TodoWrap';
import TodoItem from 'components/common/TodoItem';

const Home: React.FC = () => {
  const { todos } = useSelector(({ todos }: RootState) => ({
    todos: todos.todos,
  }));
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
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                priority={todo.priority}
                contents={todo.content}
              />
            ))}
          </TodoWrap>
          <TodoWrap title="Done">
            <TodoItem id={0} priority="lowest" contents="Done content!" />
          </TodoWrap>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
