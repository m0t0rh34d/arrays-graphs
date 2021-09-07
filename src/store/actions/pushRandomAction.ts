const createRand = () => Math.floor(Math.random() * 100);


const pushRandomAction = () => {
    return {
        type: "PUSH_RAND",
        payload: createRand(),
    }

}


export default pushRandomAction;