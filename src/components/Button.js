export default function Button({ handel, children }) {
	return (
		<button
			class='bg-indigo-400 text-white px-3 py-2 rounded shadow'
			onClick={handel}
		>
			{children}
		</button>
	);
}
