import * as types from 'store/actions/actionTypes';
import type { TodoAction } from 'store/actions';
import type { Todo } from 'types/todos';


type StateProps = {
	todos: Todo[];
	selectedTodos: Todo['id'][];
}

const initialState: StateProps = {
  todos: [],
	selectedTodos: [],
};

const todoReducer = (state: StateProps = initialState, action: TodoAction): StateProps => {
	switch(action.type) {
		case types.ADD_TODO_ITEM:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case types.DELETE_TODO_ITEM:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			};

		case types.EDIT_TODO_ITEM:
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload.id ? action.payload : todo
				)
			};

		case types.CHECK_TODO_ITEM:
			return {
				...state,
				todos: state.todos.map(todo => {
					todo.id === action.payload && (todo.isCheck = !todo.isCheck);
					return todo;
				})
			};

		case types.SELECT_TODO_ITEM:
			return {
				...state,
				selectedTodos: [...state.selectedTodos, action.payload],
			};

		case types.UNSELECT_TODO_ITEM:
			return {
				...state,
				selectedTodos: state.selectedTodos.filter(id => id !== action.payload),
			}

		default: return state
	}
};

export default todoReducer;
