// import { Action } from "@ngrx/store";
// import { TeamModel } from "../model/team.model";

// export class GetTeams implements Action {
//   readonly type = GET_TEAMS;

//   constructor(public payload: TeamModel) {}
// }

// export type Actions =  GetTeams

import { createAction, props } from "@ngrx/store";

export const GET_TEAMS = "[TEAMS] get.teams";

export const teams = createAction(GET_TEAMS, props<{ teams: Array<string> }>());
