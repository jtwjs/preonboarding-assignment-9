import React from 'react';

import Layout from 'layout';
import TodoCreator from "components/TodoCreator";

const Home: React.FC = () => {
	return (
		<Layout>
			<section className='section'>
				<TodoCreator />
			</section>
		</Layout>
	);
};

export default Home;
