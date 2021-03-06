import { createStore } from 'redux'

import rootReducer from './reducers'

export default createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// move to actions and reducers

// const initialState = {
//   posts: [{id:0, title:'FiRsT!!1!'}],
//   signUpModal: {
//     open: false
//   }
// }

// const reducer = (state = initialState, action) => {
//   if(action.type === 'ADD_POST'){
//     return Object.assign({}, state, {
//       posts: state.posts.concat(action.payload)
//     })
//   }
//   if(action.type === 'LOAD_POSTS'){
//     return {
//       ...state,
//       posts:state.posts.concat(action.payload)
//     }
//   }
//   return state
// }

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )

// export default store
