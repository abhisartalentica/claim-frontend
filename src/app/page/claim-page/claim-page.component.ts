import { Component, OnInit } from "@angular/core";
import allClaimsJSON from "../../../claims";
import { Router } from "@angular/router";

@Component({
  selector: "app-claim-page",
  templateUrl: "./claim-page.component.html",
  styleUrls: ["./claim-page.component.css"]
})
export class ClaimPageComponent implements OnInit {
  allClaims: Array<Object> = allClaimsJSON ? allClaimsJSON.module : [];
  searchText: string;

  filterClaim(claimType) {
    if (claimType == "allClaims") {
      return this.allClaims && this.allClaims;
    }
    return this.allClaims;
  }

  filterColumn() {
    if (!!this.allClaims.length) return Object.keys(this.allClaims[0]);
    return [];
  }
  openClaim() {
    this.router.navigate(["/claim"]);
  }
  routeHandler(extension){
    this.router.navigate([`/${extension}`]);
  }

  constructor(public router: Router) {}

  ngOnInit() {
    console.log("alllll claims", this.allClaims);
  }
}
