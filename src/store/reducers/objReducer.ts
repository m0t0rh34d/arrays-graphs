const initialState: any = {
  nodes: { test: "default" },
  edges: { test: "default" },
};

const objReducer = (state = initialState, action: { type: any; payload: any[]; }) => {
  switch (action.type) {
    case "SAVE_GRAPH":
      return {
        ...state,
        nodes:action.payload[0],
        edges:action.payload[1],
      };
    default:
      return {
        ...state,
        nodes: { 1: 1 },
        edges: { test: "default" },
      };
  }
};

export default objReducer

