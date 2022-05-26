import { useEffect, useRef } from 'react';
import { Network } from 'vis-network/standalone';


import { useSelector } from 'react-redux';
import arrSelector from '../store/selectors/arrSelector';




const RelatedNetwork = () => {
  const arrFromStore = useSelector(arrSelector)


  const nodesFromArr = (arr: any) => {
    const node = [];
    for (let i = 0; i < arr.length; i++) {
      node.push ({ id: arr[i], label: `Node ${arr[i]}`})
    }
    return node;
  }

  const nodes = nodesFromArr(arrFromStore);

  const container = useRef(null);



  const randomNum = (arr: string | any[]) => {
    return arr[ Math.floor(Math.random() * arr.length) ]
  }

  const edgesFromArr = (arr: string | any[]) => {
    const edge  = [];
    for (let i = 0; i < arr.length; i++) {
      edge.push ({ from: randomNum(arr), to: randomNum(arr) })
    }
    return edge;
  }

  const edges = edgesFromArr(arrFromStore)

  

  const options = {
    nodes: {
      shape: "dot",
      scaling: {
        customScalingFunction: function (min: any, max: any, total: number, value: number) {
          return value / total;
        },
        min: 5,
        max: 150,
      },
    },};

  useEffect(() => {
    const network =
      container.current &&
      new Network(container.current, { nodes, edges }, options);
  }, [container, nodes, edges]);

  return <><div ref={container} style={{ height: '600px', width: '1500px' }} /><p>{arrFromStore}</p></>;
};

export default RelatedNetwork;
