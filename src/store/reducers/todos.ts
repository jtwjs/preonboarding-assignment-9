import * as types from 'store/actions/actionTypes';
import type { TodoAction } from 'store/actions';
import type { Todo } from 'types/todos';

type StateProps = {
  todos: Todo[];
  selectedTodos: Todo['id'][];
  error: string | null;
};

const initialState: StateProps = {
  todos: [],
  selectedTodos: [],
  error: null,
};

const todoReducer = (
  state: StateProps = initialState,
  action: TodoAction,
): StateProps => {
  switch (action.type) {
    case types.GET_TODO_REQUEST:
      return state;

    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };

    case types.GET_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.ADD_TODO_REQUEST:
      return state;

    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case types.ADD_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.DELETE_TODO_REQUEST:
      return state;

    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => action.payload !== todo.id),
        selectedTodos: state.selectedTodos.filter(
          (id) => action.payload !== id,
        ),
      };

    case types.DELETE_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.EDIT_TODO_REQUEST:
      return state;

    case types.EDIT_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo,
        ),
      };

    case types.EDIT_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.CHECK_TODO_REQUEST:
      return state;

    case types.CHECK_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.id === action.payload && (todo.isCheck = !todo.isCheck);
          return todo;
        }),
      };

    case types.CHECK_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case types.SELECT_TODO_ITEM:
      return {
        ...state,
        selectedTodos: [...state.selectedTodos, action.payload],
      };

    case types.UNSELECT_TODO_ITEM:
      return {
        ...state,
        selectedTodos: state.selectedTodos.filter(
          (id) => id !== action.payload,
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
