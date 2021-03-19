export default rootReducer;

function rootReducer(
  state = {
    questions: [],
    selected_dest: {},
    isdestselected: false,
    markers: [],
  },
  action
) {
  switch (action.type) {
    case "SET_SELECTED_DEST":
      return { ...state, selected_dest: action.selected_dest };
    case "ADD_NEW_QUESTION":
      return { ...state, questions: state.questions.concat(action.question) };
    case "SET_IS_DEST_SELECTED":
      return { ...state, isdestselected: action.isdestselected };
    case "ADD_MARKER":
      return { ...state, markers: state.markers.concat(action.info) };
    default:
      return state;
  }
}
