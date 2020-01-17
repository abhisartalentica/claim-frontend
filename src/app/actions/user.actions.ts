import { createAction } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { UserModel } from "../model/user.model";

export const LOGIN_LOADING = "[User Component] login.loading";
export const LOGIN_SUCCESS = "[User Component] login.success";
export const SIGNUP_SUCCESS = "[User Component] signUp.success";

export class LoginLoding implements Action {
  readonly type = LOGIN_LOADING;
  constructor(public payload) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload) {}
}

export class SignUpSuccess implements Action {
  readonly type = SIGNUP_SUCCESS;
  constructor(public payload) {}
}

export type Actions = LoginSuccess | SignUpSuccess | LoginLoding;
