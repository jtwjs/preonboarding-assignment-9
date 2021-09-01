import React from 'react';

import Layout from 'layout';
import TodoCreator from 'components/TodoCreator';
import TodoProgress from 'components/TodoProgress';
import TodoWrap from 'components/common/TodoWrap';
import TodoItem from "components/common/TodoItem";

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
            <TodoItem priority='high' contents='content!' />
	          <TodoItem priority='middle' contents='content!' />
	          <TodoItem priority='low' contents='content!' />
	          <TodoItem priority='lowest' contents='content!' />
	          <TodoItem priority='high' contents='content!' />
	          <TodoItem priority='high' contents='content!' />
          </TodoWrap>
          <TodoWrap title="Done">
            <TodoItem priority='lowest' contents='Done content!' />
          </TodoWrap>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
