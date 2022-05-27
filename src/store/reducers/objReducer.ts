const initialState: any = {
  arr: [1,3,3],
  nodes: { 1: 1 },
  edges: {},
};

const objReducer = (state = initialState, action: { type: any; payload: any[]; }) => {
  switch (action.type) {
    case "SAVE_GRAPH":
      return {
        ...state,
        arr: [...state.arr],
        nodes:action.payload[0],
        edges:action.payload[1],
      };
    default:
      return {
        ...state,
        nodes: { 1: 1 },
        edges: { 1: 1 },
      };
  }
};

export default objReducer

