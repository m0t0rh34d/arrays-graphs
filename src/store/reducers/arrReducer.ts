const initialState = {
  arr: [1,3,3],
  nodes: { 1: 1 },
  edges: {},
};

const arrReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    
    case "GENER_ARR":
      return {
        ...state,
        arr: [...action.payload],
      };
    case "SAVE_ARR":
      return {
        ...state,
        arr: [...action.payload],
      };
    case "PUSH_RAND":
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    default:
      return state;
  }
};

export default arrReducer;

