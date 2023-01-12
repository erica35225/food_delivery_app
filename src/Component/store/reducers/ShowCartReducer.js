const initialState = {
  showCart: false,
};
export const ShowCartReducer = (state = initialState, action) => {
  if (action.type === "setShowCartTrue") {
    return { showCart: true };
  }
  if (action.type === "setShowCartFalse") {
    return { showCart: false };
  }
  return state;
};
