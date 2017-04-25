
//reducer
export default function(state, action) {
  if (!state) {
    return state = { selectedSubject: null, selectedModelKey: null}
  }
  switch(action.type) {
    case 'CHANGE_SELECTED_SUBJECT':
      state = {
        ...state,
        selectedSubject: action.selection
      }
      break;
    case 'CHANGE_SELECTED_MODEL_KEY':
      state = {
        ...state,
        selectedModelKey: action.modelKey
      }
    default:
      return state
  }
}

//actions
export const changeSelectedSubject = (selection) => {
  return { type: 'CHANGE_SELECTED_SUBJECT', selection: selection}
}
export const changeSelectedModelKey = (modelKey) => {
  return { type: 'CHANGE_SELECTED_MODEL_KEY', modelKey: modelkey}
}
