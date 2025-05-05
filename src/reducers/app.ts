import { User } from "../types/Transaction";

const initialState = {
  user: {},
};

type Action =
  | { type: "CHANGE_USER"; payload: Record<string, User> }
  | { type: "OTHER_ACTION" };

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "CHANGE_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default reducer;
