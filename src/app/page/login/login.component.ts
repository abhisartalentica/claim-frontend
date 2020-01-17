import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { DataService } from "../../services/data.service";
import { Store, select } from "@ngrx/store";
import * as UserAction from "../../actions/user.actions";
import * as TeamsAction from "../../actions/teams.action";
import { AppState } from "../../app.state";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  routeParams: String = "/login";
  loading = false;
  cities2 = [
    { id: 1, name: "Vilnius" },
    { id: 2, name: "Kaunas" },
    { id: 3, name: "Pavilnys", disabled: true },
    { id: 4, name: "Pabradė" },
    { id: 5, name: "Klaipėda" }
  ];
  selectedUserIds: number[];
  logIn(x) {
    this.store.dispatch(new UserAction.LoginLoding({ loading: true }));
    this.store.select("user").subscribe(userData => {
      this.loading = userData["loading"];
    });
    this.auth
      .Login({
        username: x.value.userName,
        password: x.value.password
      })
      .subscribe(
        res => {
          this.cookieService.set("duration", res["duration"]);
          this.cookieService.set("url", res["token"]);
          this.cookieService.set("name", "token");
          this.store.dispatch(
            new UserAction.LoginSuccess({
              loading: false,
              user: res["employee"]
            })
          );
          localStorage.setItem("userData", x.value.userName || "");
          this.router.navigate([""]);
        },
        err => {
          this.store.dispatch(
            new UserAction.LoginSuccess({
              loading: false
            })
          );
        }
      );
  }
  constructor(
    private fb: FormBuilder,
    public router: Router,
    private auth: AuthService,
    private store: Store<AppState>,
    private cookieService: CookieService,
    private dataService: DataService
  ) {}

  loginHandler(route) {
    this.router.navigate([`/${route}`]);
  }
  ngOnInit() {
    this.dataService.getTeams().subscribe((res: Array<string>) => {
      console.log("response ... ", res);
      this.store.dispatch(TeamsAction.teams({ teams: res }));
    });

    if (this.auth.isAuthenticated()) return this.router.navigate([""]);
    console.log("url", this.router.url);
    this.routeParams = this.router.url;
    this.loginForm = this.fb.group({
      userName: "",
      password: ""
    });
  }
}
