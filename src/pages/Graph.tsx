import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network/standalone';


import { useDispatch, useSelector } from 'react-redux';
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

  

  const options = {};

  useEffect(() => {
    const network =
      container.current &&
      new Network(container.current, { nodes, edges }, options);
  }, [container, nodes, edges]);

  return <><div ref={container} style={{ height: '500px', width: '800px' }} /><p>{arrFromStore}</p></>;
};

export default RelatedNetwork;
