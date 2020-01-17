import { Component, OnInit } from "@angular/core";
import allClaimsJSON from "../../../claims";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { FilterClaimPipe } from "../../filter-claim.pipe";
import { Store, select } from "@ngrx/store";
import { AppState } from "../../app.state";
import { Observable } from "rxjs/Observable";
import { UserModel } from "../../model/user.model";
import * as ClaimAction from "../../actions/claims.action";

@Component({
  selector: "app-claim-page",
  templateUrl: "./claim-page.component.html",
  styleUrls: ["./claim-page.component.css"]
})
export class ClaimPageComponent implements OnInit {
  allClaims: Array<Object> = allClaimsJSON ? allClaimsJSON.module : [];
  searchText: string;
  asideVisible = false;
  handlefilterClaim = new FilterClaimPipe();
  filterClaims: Array<Object> = allClaimsJSON ? allClaimsJSON.module : [];
  userdata = {};

  filterClaim() {
    this.dataService.getFilterString().subscribe(searchStr => {
      this.filterClaims = this.handlefilterClaim.transform(
        this.allClaims,
        searchStr
      );
    });
  }

  filterColumn() {
    if (!!this.allClaims.length) return Object.keys(this.allClaims[0]);
    return [];
  }
  openClaim() {
    this.router.navigate(["/claim"]);
  }
  formClickHandler(extension) {
    this.router.navigate([`/createClaim/${extension}`]);
  }
  openAside(e) {
    e.stopPropagation();
    e.preventDefault();
    this.asideVisible = true;
  }
  closeAside(e) {
    e.stopPropagation();
    e.preventDefault();
    this.asideVisible = false;
  }

  constructor(
    public router: Router,
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    console.log("alllll claims", this.store.pipe(select("user")));
    this.filterClaim();
    this.store.dispatch(new ClaimAction.ClaimLoading({ loading: true }));
    this.store.select("claims").subscribe(res => {
      console.log("claims store", res);
    });
    this.store.select("user").subscribe(res => {
      console.log("selected user", res);
      this.userdata = res["user"];
      this.dataService.getAllClaims(this.userdata).subscribe(res => {
        console.log("claim data", res);
        this.store.dispatch(
          new ClaimAction.ClaimSuccess({
            allClaims: [
              ...res["claims"]["self_claims"],
              ...res["claims"]["review_claims"]
            ],
            myClaims: res["claims"]["self_claims"],
            othersClaim: res["claims"]["review_claims"]
          })
        );
      });
    });

    console.log("user data");
    this.dataService.getConfig().subscribe(data => {
      // console.log("data servu=ice working .....", data);
    });
  }
}
