import { useEffect, useRef } from "react";
import { Network } from 'vis-network/standalone';

import { useSelector } from "react-redux";
import arrSelector from "../store/selectors/arrSelector";
import { data } from "vis-network";

const RelatedNetwork2 = () => {
  const arrFromStore = useSelector(arrSelector);

  const container = useRef(null);


  const nodesFromArr = (arr: any) => {
    const node = [];
    for (let i = 0; i < arr.length; i++) {
      node.push ({ id: arr[i], value: arr[i], label: `Node ${arr[i]}`})
    }
    return node;
  }
  
  const nodes = nodesFromArr(arrFromStore);



  const randomNum = (arr: string | any[]) => {
    return arr[ Math.floor(Math.random() * arr.length) ]
  }

  const edgesFromArr = (arr: string | any[]) => {
    const edge  = [];
    for (let i = 0; i < arr.length; i++) {
      edge.push ({ from: randomNum(arr), to: randomNum(arr), value: arr[i] })
    }
    return edge;
  }

  const edges = edgesFromArr(arrFromStore)
    var data = {
      nodes: nodes,
      edges: edges,
    };
    var options = {
      nodes: {
        shape: "dot",
        scaling: {
          customScalingFunction: function (min: any, max: any, total: number, value: number) {
            return value / total;
          },
          min: 5,
          max: 150,
        },
      },
    };
  
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const network = 
    container.current &&
    new Network(container.current, data, options);

  });
  
  const dataString = JSON.stringify(data);

  return (
    <>
      <div ref={container} style={{ height: "600px", width: "1500px" }} />
      <form id="conf"></form>

      <p>{arrFromStore}</p>
      <p>{dataString}</p>
    </>
  );
};

export default RelatedNetwork2