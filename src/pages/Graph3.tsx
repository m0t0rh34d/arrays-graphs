import { useEffect, useMemo, useRef, useState } from "react";
import { Network } from "vis-network/standalone";

import { useSelector } from "react-redux";
import arrSelector from "../store/selectors/arrSelector";
import store from "../store/store";
import saveGraphObjAction from "./../store/actions/saveGraphObjAction";
import { useDispatch } from "react-redux";
import nodesSelector from "../store/selectors/nodesSelector";
import edgesSelector from "../store/selectors/edgesSelector";
import nodesFromArr from "../utils/nodesFromArr";
import randomNum from "../utils/randomNum";
import edgesFromArr from "../utils/edgesFromArr";

const RelatedNetwork2 = () => {
  const arrFromStore = useSelector(arrSelector);
  const nodesFromStore = useSelector(nodesSelector);
  const edgesFromStore = useSelector(edgesSelector);
  /* 
  console.log("full store obj", store.getState());
  console.log("edges from store variable", edgesFromStore);
  console.log("edges from store variable .test", edgesFromStore.test); */

  const [dataString, setDataString] = useState("null");

  const container = useRef(null);
  const dispatch = useDispatch();

  const nodes = useMemo (() => nodesFromArr(arrFromStore), [arrFromStore]);

  const edges =
    edgesFromStore.test === "default"
      ? edgesFromArr(arrFromStore, randomNum)
      : edgesFromStore;

  var data = {
    nodes: nodes,
    edges: edges,
  };

  console.log("compoent lvel")

  useEffect(() => {
  console.log("useEffect nodes")
  
  },[nodes])

  useEffect(() => {
  console.log("useEffect nodes/edges")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const options = {
      nodes: {
        shape: "dot",
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
    };

    const network =
      container.current &&
      new Network(
        container.current,
        {
          nodes: nodes,
          edges: edges,
        },
        options
      );
  }, [nodes, edges]);

  useEffect(     () => {
    console.log("useEffect nodesFromStore")

      setDataString(JSON.stringify(nodesFromStore))
    },

    [nodesFromStore]
  );

  const handleSaveObj = () => {
    dispatch(saveGraphObjAction(nodes, edges));
    console.log(store.getState());
  };

  /* 
  const network =
  container.current &&
  new Network(
    container.current,
    {
      nodes: nodesFromArr(arrFromStore),
      edges: edges,
    },
    options
  ); */

  const handleRecreateObj = () => {
    dispatch(
      saveGraphObjAction(
        nodesFromArr(arrFromStore),
        edgesFromArr(arrFromStore, randomNum)
      )
    );
  };

  return (
    <>
      <div ref={container} style={{ height: "600px", width: "1500px" }} />
      <button onClick={handleSaveObj}>Handle save obj</button>
      <button onClick={handleRecreateObj}>Handle recreate obj</button>

      <p>{arrFromStore}</p>

      <p>{dataString}</p>
    </>
  );
};

export default RelatedNetwork2;
