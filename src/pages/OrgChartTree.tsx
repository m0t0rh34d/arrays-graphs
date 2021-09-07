
import { useRef } from "react";


import { DataSet, Network } from "vis-network/standalone";
import "../styles/OrgChartTree.css"



const arrToChart = (arr: number[]): Object => {
  const convObj: any = { };

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      convObj[`${arr[i]} value`] = arr[i]
    }
  }
  console.log(convObj);
  return convObj;

}















const OrgChartTree = () => {


  const nodes = new DataSet([
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" }
  ]);
  
  // create an array with edges
  const edges = new DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 3 }
  ]);
  
  // create a network
  const container: any = document.getElementById("mynetwork");
  const data = {
    nodes: nodes,
    edges: edges
  };
  const options = {};
  const network = new Network(container, data, options);


  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="mynetwork" className = "OrgTreeWrapper"> oy lee oy lee
    </div>
  );
}

export default OrgChartTree