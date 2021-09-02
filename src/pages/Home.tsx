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

  const todoInProgress = todos.map(
    (todo) =>
      !todo.isCheck && (
        <TodoItem
          key={todo.id}
          id={todo.id}
          priority={todo.priority}
          contents={todo.content}
        />
      ),
  );

  const todoDone = todos.map(
    (todo) =>
      todo.isCheck && (
        <TodoItem
          key={todo.id}
          id={todo.id}
          priority={todo.priority}
          contents={todo.content}
        />
      ),
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
          <TodoWrap title="In-Progress">{todoInProgress}</TodoWrap>
          <TodoWrap title="Done">{todoDone}</TodoWrap>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
