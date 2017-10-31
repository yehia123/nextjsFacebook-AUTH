import cuid from 'cuid';

// ACTION TYPES
const ON_CHANGE = 'ON_CHANGE';
const ADD_ITEM = 'ADD_ITEM';

const initialState = {
  inputVal: 'default val',
  board: { id: 0,
    title: 'Animal Related Activities',
    color: '#56b771',
    theme: 'one'
  },
  items: [{ id: 1233421, name: 'Walk the dog.'}, { id: 992938 , name: 'Pet the bunny.'}]
};

export const onChangeAction = e => ({
  type: ON_CHANGE,
  payload: e.target.value
})

export const addItemAction = () => ({
  type: 'ADD_ITEM'
});

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
    case ADD_ITEM :
      return {
        ...state,
        inputVal: '',
        items: state.items.concat({
          id: cuid(),
          name: state.inputVal
        })
      };
    case ON_CHANGE:
      return { ...state,
      inputVal: payload 
    }
    default: return state;
  }
};


export { initialState, boardsSlice as reducer };
