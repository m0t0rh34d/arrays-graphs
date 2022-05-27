/* const saveGraphObjAction: any = (nodes: { id: any; label: string }[], edges: { from: any; to: any }[]) => {

    return {
        type: 'SAVE_GRAPH',
        payload: [nodes, edges]
    }
}

export default saveGraphObjAction */



const saveGraphObjAction = (nodes: { id: any; label: string; }[], edges: { from: any; to: any; }[]) => {
    return { 
        type: "SAVE_GRAPH",
        payload: [nodes, edges]
       };
  };
  
  
  
  export default saveGraphObjAction;