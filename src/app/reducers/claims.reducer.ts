import * as ClaimAction from "../actions/claims.action";

// Section 1
const initialState = {
  loading: false,
  allClaims: undefined,
  selectedClaim: {},
  myClaims: undefined,
  othersClaim: undefined
};
// Section 2
export function ClaimReducer(
  state = [initialState],
  action: ClaimAction.Actions
) {
  switch (action.type) {
    case ClaimAction.CLAIM_LOADING:
      return { ...state, loading: true };
    case ClaimAction.CLAIM_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
