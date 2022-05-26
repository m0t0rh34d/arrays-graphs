import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import saveArrAction from "../store/actions/saveArrAction";
import pushRandomAction from "../store/actions/pushRandomAction";
import arrSelector from "../store/selectors/arrSelector";
import generRandArrAction from "./../store/actions/generRandArrAction";

const ArrayGenerator = () => {
  const dispatch = useDispatch();

  const arrFetched = useSelector(arrSelector);

  const [users, setUsers] = useState([]);

  const [array, setArray] = useState([0]);
  const [clicked, setClicked] = useState(false);

  const fetchedArr = arrFetched.map(
    (item: string, index: number, array: string | any[]) => {
      const lastItem: boolean = array.length - 1 === index;

      if (Array.isArray(item)) {
        return "[" + item + "], ";
      }
      if (lastItem && Array.isArray(item)) {
        return "[" + item + "]";
      }
      return item + ", ";
    }
  );

  const stateArr = array.map(
    (item: {} | null | undefined, index: any, arr: any) => {
      if (Array.isArray(item))
        return (
          <div>
            [{item[0]}, {item[1]}]
          </div>
        );
      if (!Array.isArray(item)) return <div>{item}</div>;
    }
  );

  function flatDeep(arr: any[], d = 1): any {
    return d > 0
      ? arr.reduce(
          (acc: string | number[], val: any) =>
            acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
          []
        )
      : arr.slice();
  }
  const handleRandArr = () => {
    dispatch(generRandArrAction());
  };

  const handleFlatten = () => {
    const flattened: any = flatDeep(arrFetched, Infinity);
    dispatch(saveArrAction(flattened));
    setArray(flattened);
  };

  const handleUnique = () => {
    const unique: any = arrFetched.filter ((item: any, index: any, arr: string | any[]) => {
      return arr.indexOf(item) === index;
    })
    dispatch(saveArrAction(unique));

    setArray(unique)
  }

  const handleSave = () => {
    dispatch(saveArrAction(arrFetched));
  };

  const handleAddRand = () => {
    dispatch(pushRandomAction());
    setClicked(true);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos");
  }, []);

  return (
    <div className="App">
      <h1> from store: {fetchedArr} </h1>
      <h1> RENDER LIST (FROM useState) {stateArr} </h1>
      <button onClick={handleRandArr}>Generate array</button>
      <button onClick={handleFlatten}>Flatten array</button>
      <button onClick={handleUnique}>Unique array</button>
      <button onClick={handleSave}>Save array</button>
      <button onClick={handleAddRand}>Push add</button>
      {clicked ? <p>{stateArr}</p> : <p>Havent' yet</p>}
    </div>
  );
};

export default ArrayGenerator;
