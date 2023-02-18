import { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

export default function App() {
	const [state, setState] = useState([
		{
			id: 1,
			count: 0,
		},
		{
			id: 2,
			count: 4,
		},
	]);

	const totalCount = () => {
		return state.reduce((acc, cur) => acc + cur.count, 0);
	};
	return (
		<div class='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
			<h1 class='max-w-md mx-auto text-center text-2xl font-bold'>
				Simple Counter Application
			</h1>

			<div class='max-w-md mx-auto mt-10 space-y-5'>
				<h2>Hello Stats</h2>
				<Counter />
				<Counter />
				<Stats count={totalCount()} />
			</div>
		</div>
	);
}
