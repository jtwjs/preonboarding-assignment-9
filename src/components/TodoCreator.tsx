import React from 'react';

import TodoInput from "components/TodoInput";
import TodoPriority from "components/TodoPriority";
import Button from "components/common/Button";

const TodoCreator: React.FC = (props) => {
	return (
		<section className='creator'>
			<h2 className='a11y'>Todo Creator</h2>
			<TodoInput />
			<TodoPriority />
			<Button className='submit-btn' onClick={() => console.log('서브밋')}>
				 to-do
			</Button>
		</section>
	);
};

export default TodoCreator;

