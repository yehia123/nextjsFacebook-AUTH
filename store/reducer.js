

const initialState = {
  board: { id: 0,
    title: 'Animal Related Activities',
    color: '#56b771',
    theme: 'one',
    items: [{ name: 'Walk the dog.'}, { name: 'Pet the bunny.'}]
  }
};

/**
const addItemReducer = (state = [], action = {}) => {
    const { payload, type} = action;
    switch (type) {
        case: return {}
    default: return state; 
}
*/

const boardsSlice = (state = initialState, action = {}) => {
  const { payload, type} = action;
  switch (type) {
    case 'ADD_ITEM':
      const { item } = payload;
      return {
        ...state
      };
    default: return state;
  }
};


export { initialState, boardsSlice as reducer };
