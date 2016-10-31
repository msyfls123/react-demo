import {
  NUM_INCREMENT,
  NUM_DECREMENT,
  POST_ING,
  POST_RECEIVED
} from '../action/demo'

function displayNum(state = 0, action) {
  switch (action.type) {
    case NUM_INCREMENT:
      return state + action.step
    case NUM_DECREMENT:
      return state - action.step
    case POST_RECEIVED:
      return action.empty ? 0 : state
    default:
      return state
  }
}

function couldPost(state = true, action) {
  switch (action.type) {
    case POST_ING:
      return false
    default:
      return true
  }
}

function resultText(state = '', action) {
  switch (action.type) {
    case POST_ING:
      return 'Wait...I\'m busy now'
    case POST_RECEIVED:
      return action.empty ? 'Sorry, you lost all' : 'Great, you keep all'
    case NUM_INCREMENT:
      return '+1 for him!'
    case NUM_DECREMENT:
      return '-1 for him...'
    default:
      return state
  }
}

export default {
  displayNum,
  couldPost,
  resultText,
}
