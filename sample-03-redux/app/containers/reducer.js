import { combineReducers } from 'redux';
import { GET_NAV_LINKS } from '../actions/actions';


function nave(state = [], action) {
  switch (action.type) {
    case GET_NAV_LINKS:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

const app = combineReducers({
  nave
})

export default app
