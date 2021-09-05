import React, {useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store/reducers';
import type { TargetIdRef } from 'types/todos';

import Layout from 'layout';
import TodoCreator from 'components/TodoCreator';
import TodoProgress from 'components/TodoProgress';
import TodoWrap from 'components/common/TodoWrap';
import TodoItem from 'components/common/TodoItem';

const Home: React.FC = () => {
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);
  const { todos } = useSelector(({ todos }: RootState) => ({
    todos: todos.todos,
  }));
  const dragTargetId = useRef<TargetIdRef>({ id: 0, isCheck: false });
  const dropTargetId = useRef<TargetIdRef>({ id: 0, isCheck: false });

  const handleMute = useCallback((isMute: boolean) => {
    setMute(isMute);
  }, []);

  const handleDropped = useCallback((isDropped) => {
    setIsDropped(isDropped);
  }, []);

  const todoInProgress = todos.map(
    (todo) =>
      !todo.isCheck && (
        <TodoItem
          key={todo.id}
          id={todo.id}
          priority={todo.priority}
          contents={todo.content}
          isCheck={todo.isCheck}
          mute={mute}
          isDropped={isDropped}
          handleMute={handleMute}
          handleDropped={handleDropped}
          dragTargetId={dragTargetId}
          dropTargetId={dropTargetId}
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
          isCheck={todo.isCheck}
          mute={mute}
          isDropped={isDropped}
          handleMute={handleMute}
          handleDropped={handleDropped}
          dragTargetId={dragTargetId}
          dropTargetId={dropTargetId}
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
          <TodoWrap
            category="In-Progress"
            handleDropped={handleDropped}
            dragTargetId={dragTargetId}
            dropTargetId={dropTargetId}
          >
            {todoInProgress}
          </TodoWrap>
          <TodoWrap
            category="Done"
            handleDropped={handleDropped}
            dragTargetId={dragTargetId}
            dropTargetId={dropTargetId}
          >
            {todoDone}
          </TodoWrap>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
