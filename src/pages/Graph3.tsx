
import { useEffect, useRef } from "react";
import { Network } from 'vis-network/standalone';

import { useSelector } from "react-redux";
import arrSelector from "../store/selectors/arrSelector";
import store from "../store/store";
import saveGraphObjAction from './../store/actions/saveGraphObjAction';
import { useDispatch } from "react-redux";
import nodesSelector from "../store/selectors/nodesSelector";
import edgesSelector from "../store/selectors/edgesSelector";

const RelatedNetwork2 = () => {
    const arrFromStore = useSelector(arrSelector);
    const nodesFromStore = useSelector(nodesSelector);
    const edgesFromStore = useSelector(edgesSelector);

    console.log("full store obj", store.getState())
    console.log("edges from store variable", edgesFromStore)
    console.log("edges from store variable .test", edgesFromStore.test)
  
    
    const container = useRef(null);
    const dispatch = useDispatch()
  
  
    const nodesFromArr = (arr: any) => {
      const node = [];
      for (let i = 0; i < arr.length; i++) {
        node.push ({ id: arr[i], label: `Node ${arr[i]}`})
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
        edge.push ({ from: randomNum(arr), to: randomNum(arr)})
      }
      return edge;
    }
  
    const edges = 
    edgesFromStore.test === "default" ? edgesFromArr(arrFromStore) : edgesFromStore
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {
        nodes: {
          shape: 'dot'
        },
        layout: {
          hierarchical: {
            direction: "UD",
            sortMethod: "directed",
          },
        },
        edges: {
          arrows: "to",
        },
      } 
    
    
    useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const network = 
      container.current &&
      new Network(container.current, data, options);
  
    });
    
    const dataString = JSON.stringify(nodesFromStore);




    const handleSaveObj = () => {
      
      dispatch(saveGraphObjAction(nodes, edges))
      console.log(store.getState())

 


    }
  
    return (
      <>
        <div ref={container} style={{ height: "600px", width: "1500px" }} />
        <button onClick={handleSaveObj}>Handle save obj</button>
  
        <p>{arrFromStore}</p>
        <p>{dataString}</p>
      </>
    );
  };
  
  export default RelatedNetwork2