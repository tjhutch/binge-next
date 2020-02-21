const saved = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SAVED':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'REMOVE_SAVED':
      return state.filter(saved => saved.id !== action.id);
    default:
      return state
  }
};
export default saved