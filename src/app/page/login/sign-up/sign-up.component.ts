import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { getAllTeamsWithId } from "../../../reducers/teams.reducer";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpObj: Object = {};
  error: Object = {};
  hasError: boolean = false;
  teams$;
  teamsData;

  selectedTeams = [];
  cars = [
    { id: 1, name: "Volvo" },
    { id: 2, name: "Saab", disabled: true },
    { id: 3, name: "Opel" },
    { id: 4, name: "Audi" }
  ];
  getSelectedTeams(teams = []) {
    return teams.map(team => team["team"]);
  }

  signUp(obj) {
    console.log("sign up ", obj);
    if (this.hasError) {
      return;
    }
    this.signUpObj["email"] = obj.value.email;
    this.signUpObj["password"] = obj.value.password;
    this.signUpObj["teams"] = obj.value.team;
    this.signUpObj["name"] = obj.value.name;
    this.signUpObj["role"] = "employee";

    // this.signUpObj[]

    console.log("signup data", this.signUpObj);
    this.signUpService.signUp(this.signUpObj).subscribe(
      res => {
        this.router.navigate(["/login"]);
      },
      err => {
        alert("some error occured");
      }
    );
  }
  constructor(
    private fb: FormBuilder,
    private signUpService: AuthService,
    public router: Router,
    public store: Store<{ teams: Array<string> }>
  ) {
    store.select("teams").subscribe(res => {
      console.log("dcnjbck", res);
      this.teams$ = getAllTeamsWithId(res["teams"]);
    });
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: "",
      password: "",
      team: "",
      confirmPassword: "",
      name: ""
    });
  }
}
