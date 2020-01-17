import { UserModel } from "./model/user.model";
import { ClaimModel } from "./model/claim.model";

export interface AppState {
  readonly user: UserModel;
  readonly claims: ClaimModel;
}
