
  const randomNum = (arr: string | any[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  export default randomNum