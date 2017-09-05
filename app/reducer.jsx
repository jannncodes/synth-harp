//INITIAL STATE
const initialState = {
  currentKey: 'C',
  C: ['2G', '2A', '2B', '3C', '3D', '3E', '3F', '3G', '3A', '3B', '4C', '4D', '4E', '4F', '4G'],
  G: ['2G', '2A', '2B', '3C', '3D', '3E', '3FSharp', '3G', '3A', '3B', '4C', '4D', '4E', '4FSharp', '4G'],
  D: ['2G', '2A', '2B', '3CSharp', '3D', '3E', '3FSharp', '3G', '3A', '3B', '4CSharp', '4D', '4E', '4FSharp', '4G'],
  E: ['2GSharp', '2A', '2B', '3CSharp', '3DSharp', '3E', '3FSharp', '3GSharp', '3A', '3B', '4CSharp', '4DSharp', '4E', '4FSharp'],
  B: ['2GSharp', '2ASharp', '2B', '3CSharp', '3DSharp', '3E', '3FSharp', '3GSharp', '3ASharp', '3B', '4CSharp', '4DSharp', '4E', '4FSharp'],
  FSharp: ['2GSharp', '2ASharp', '2B', '3CSharp', '3DSharp', '3F', '3FSharp', '3GSharp', '3ASharp', '3B', '4CSharp', '4DSharp', '4F', '4FSharp'],
  F: ['2G', '2ASharp', '2B', '3C', '3D', '3E', '3F', '3G', '3ASharp', '3B', '4C', '4D', '4E', '4F', '4G'],
  BFlat: ['2G', '2ASharp', '2B', '3C', '3DSharp', '3E', '3F', '3G', '3ASharp', '3B', '4C', '4DSharp', '4E', '4F', '4G'],
  EFlat: ['2GSharp', '2ASharp', '2B', '3C', '3DSharp', '3E', '3F', '3GSharp', '3ASharp', '3B', '4C', '4DSharp', '4E', '4F'],
  AFlat: ['2GSharp', '2ASharp', '2B', '3CSharp', '3DSharp', '3E', '3F', '3GSharp', '3ASharp', '3B', '4CSharp', '4DSharp', '4E', '4F'],
  DFlat: ['2GSharp', '2ASharp', '2B', '3CSharp', '3DSharp', '3E', '3FSharp', '3GSharp', '3ASharp', '3B', '4CSharp', '4DSharp', '4E', '4FSharp'],
};

//ACTION CREATOR
export const setKey = function(key) {
  return {
    type: 'SET_KEY',
    key
  };
};

//REDUCER
export default function reducer (state = initialState, action) {
  switch (action.type) {

    case 'SET_KEY':
      return Object.assign({}, state, {currentKey: action.key});

    default:
      return state;
  }
}
