import { User } from "../types/User";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

type Action = { type: "CHANGE_USER"; payload: User } | { type: "OTHER_ACTION" };

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "CHANGE_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default reducer;
