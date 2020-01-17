// import { Action } from "@ngrx/store";
// import { TeamModel } from "../model/team.model";
// import * as TeamActions from "../actions/teams.action";

// // Section 1
// const initialState: TeamModel = {
//   teams: []
// };

// // Section 2
// export function reducer(
//   state: TeamModel = initialState,
//   action: TeamActions.Actions
// ) {
//   // Section 3
//   switch (action.type) {
//     case TeamActions.GET_TEAMS:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

import { Action, createReducer, on } from "@ngrx/store";
import * as TeamActions from "../actions/teams.action";

export interface State {
  teams: Array<string>;
}

export const initialState: State = {
  teams: []
};

const teamsReducer = createReducer(
  initialState,
  on(TeamActions.teams, (state, { teams }) => ({ teams: teams }))
);

export function TeamReducer(state: State | undefined, action: Action) {
  return teamsReducer(state, action);
}

export function getAllTeamsWithId(teams = []) {
    
  return teams.map((team, index) => ({ team: team, uid: index }));
}
