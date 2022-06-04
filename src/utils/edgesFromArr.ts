const edgesFromArr = (arr: string | any[], num: (arg0: string | any[]) => any) => {
    const edge = [];
    for (let i = 0; i < arr.length; i++) {
      edge.push({ from: num(arr), to: num(arr) });
    }
    return edge;
  };


  export default edgesFromArr