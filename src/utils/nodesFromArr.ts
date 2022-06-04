const nodesFromArr = (arr: any) => {
    const node = [];
    for (let i = 0; i < arr.length; i++) {
      node.push({ id: arr[i], label: `Node ${arr[i]}` });
    }
    return node;
  };


  export default nodesFromArr