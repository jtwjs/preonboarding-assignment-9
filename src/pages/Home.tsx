import React from 'react';

import Layout from 'layout';
import TodoCreator from 'components/TodoCreator';
import TodoProgress from 'components/TodoProgress';
import TodoWrap from 'components/common/TodoWrap';
import TodoItem from 'components/common/TodoItem';

const Home: React.FC = () => {
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
            />
            <TodoItem
              id="2"
              priority="middle"
              contents="content!"
            />
          </TodoWrap>
          <TodoWrap title="Done">
            <TodoItem
              id="0"
              priority="lowest"
              contents="Done content!"
            />
          </TodoWrap>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
