export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_SETTER = "MEMORY_SETTER";
export const MEMORY_REPEAT = "MEMORY_REPEAT";
export const MEMORY_RESET = "MEMORY_RESET";
export const CHANGE_INITIAL = "CHANGE_INITIAL"


export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: Number(number) });
}

export const changeOperation = (operation) => {
  return ({ type: CHANGE_OPERATION, payload: operation });
}

export const clearDisplay = () => {
  return ({ type: CLEAR_DISPLAY});
}

export const memorySetter = () => {
  return ({ type: MEMORY_SETTER});
}

export const memoryRepeat = () => {
  return ({ type: MEMORY_REPEAT});
}

export const memoryReset = () => {
  return ({ type: MEMORY_RESET});
}

export const changeInitial = (number) => {
  return ({ type: CHANGE_INITIAL, payload: Number(number) });
}