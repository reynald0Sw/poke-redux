export const logger = (store) => (next) => (action)=> {
  console.log(action);
  next(action);
}

export const feacturing = (store) => (next) => (actionInfo) => {
  const feactured = [{name:'pokerey'}, ...actionInfo.action.payload];
  const updatedActionInfo ={
    ...actionInfo,
    action: { ...actionInfo.action, payload: feactured},
  };
  next(updatedActionInfo);
}