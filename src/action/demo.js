const NUM_INCREMENT = 'NUM_INCREMENT'
const NUM_DECREMENT = 'NUM_DECREMENT'
const POST_ING = 'POST_ING'
const POST_RECEIVED = 'POST_RECEIVED'

function add_num(step) {
  return {
    type: NUM_INCREMENT,
    step
  }
}

function sub_num(step) {
  return {
    type: NUM_DECREMENT,
    step
  }
}

function is_posting(){
  return {
    type: POST_ING
  }
}

function post_num() {
  return (dispatch, getState) => {
    dispatch(is_posting())
    setTimeout(() => {
      if(getState().displayNum%2!==0) {
        return dispatch(post_receive(true))
      } else {
        return dispatch(post_receive(false))
      }
    }, 2000)
  }
}

function post_receive(toEmpty) {
  return {
    type: POST_RECEIVED,
    empty: toEmpty
  }
}

export {
  NUM_INCREMENT,
  NUM_DECREMENT,
  POST_ING,
  POST_RECEIVED,
  add_num,
  sub_num,
  post_num
}
