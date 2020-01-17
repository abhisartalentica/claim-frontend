import { Action } from "@ngrx/store";
import { UserModel } from "../model/user.model";
import * as UserAction from "../actions/user.actions";

// Section 1
const initialState = {
  loading: false,
  user: undefined
};
// Section 2
export function UserReducer(
  state = [initialState],
  action: UserAction.Actions
) {
  switch (action.type) {
    case UserAction.LOGIN_LOADING:
      return { ...state, loading: true };
    case UserAction.LOGIN_SUCCESS:
      console.log("login succcess", action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
