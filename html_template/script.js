//
const countEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

// Action Initialize
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// State Initialize
const initializeCount = {
	value: 0,
};

// Action Creator
const increment = (value) => {
	return {
		type: INCREMENT,
		payload: value,
	};
};

const decrement = (value) => {
	return {
		type: DECREMENT,
		payload: value,
	};
};

// Create countReducer Function
const countReducer = (state = initializeCount, action) => {
	if (action.type === INCREMENT) {
		return {
			...state,
			value: state.value + action.payload,
		};
	} else if (action.type === DECREMENT) {
		return {
			...state,
			value: state.value - action.payload,
		};
	} else {
		return state;
	}
};

// create Store from Reducer Function
const store = Redux.createStore(countReducer);

const fun = () => {
	const state = store.getState();
	countEl.innerText = state.value.toString();
};

store.subscribe(fun);
fun();

// Add EventListener on buttons
incrementEl.addEventListener('click', () => {
	store.dispatch(increment(10));
});

decrementEl.addEventListener('click', () => {
	store.dispatch(decrement(20));
});
