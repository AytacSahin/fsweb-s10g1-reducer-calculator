import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_SETTER,
  MEMORY_REPEAT,
  MEMORY_RESET,
  CHANGE_INITIAL
} from './../actions';

export const initialState = {
  initial: 0,
  total: 0,
  operation: "+",
  memory: 0
}

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case ("+"):
      return num1 + num2;
    case ("*"):
      return num1 * num2;
    case ("-"):
      return num1 - num2;
    default:
      return;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case (ADD_ONE):
      return ({
        ...state,
        total: state.total + 1
      });

    case (APPLY_NUMBER):
      return ({
        ...state,
        total: calculateResult(state.total, action.payload, state.operation)
      });

    case (CHANGE_OPERATION):
      return ({
        ...state,
        operation: action.payload,
        initial: 0
      });

    case (CLEAR_DISPLAY):
      return ({
        ...state,
        initial: 0,
      });

    case (MEMORY_SETTER):
      return ({
        ...state,
        memory: state.total
      });

    case (MEMORY_REPEAT):
      return ({
        ...state,
        total: calculateResult(state.total, state.memory, state.operation)
      });

    case (MEMORY_RESET):
      return ({
        ...state,
        memory: 0
      });

    case (CHANGE_INITIAL):
      return ({
        ...state,
        initial: state.initial * 10 + action.payload
      });

    default:
      return state;
  }
}

export default reducer;