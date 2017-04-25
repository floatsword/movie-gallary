export default function(state, action) {
  if (!state) {
    return state = { searchList: null }
  }
  switch(action.type) {
    case: 'UPDATE_LIST':
      state = {
        ...state,
        searchList: action.searchSubjects
      }
      break;
    default:
      return state
  }
}

export const updateList = (searchSubjects) => {
  return { searchList: searchSubjects}
}
