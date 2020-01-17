import { Action } from "@ngrx/store";

export const CLAIM_LOADING = "[Claim Component] claim.loading";
export const CLAIM_SUCCESS = "[ Claim Component] claim.success";

export class ClaimLoading implements Action {
  readonly type = CLAIM_LOADING;
  constructor(public payload) {}
}

export class ClaimSuccess implements Action {
  readonly type = CLAIM_SUCCESS;
  constructor(public payload) {}
}

export type Actions = ClaimLoading | ClaimSuccess;
