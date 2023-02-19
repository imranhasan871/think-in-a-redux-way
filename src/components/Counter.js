import Count from './Count';
import Button from './Button';

export default function Counter({ id, count, increment, decrement }) {
	return (
		<div class='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
			<Count count={count} />
			<div class='flex space-x-3'>
				<Button handel={() => increment(id)}>Increment</Button>
				<Button handel={() => decrement(id)}>Decrement</Button>
			</div>
		</div>
	);
}
