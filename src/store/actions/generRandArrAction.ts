const generRandArr = (): number[] | number[][] => {
  const arrLength = Math.floor(Math.random() * (10 - 5) + 5);
  const newArr: any = new Array(arrLength);

  for (let i = 0; i < newArr.length; i++) {
    const arr = Math.floor(Math.random() * 100) % 2 === 0;
    newArr[i] = arr
      ? [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
      : Math.floor(Math.random() * 100);
  }
  return newArr;
};

const generRandArrAction = () => {
  return {
    type: "GENER_ARR",
    payload: generRandArr(),
  };
};

export default generRandArrAction;
