import { Component, OnInit } from "@angular/core";
import allClaimsJSON from "../../../claims";
import { Router } from "@angular/router";

@Component({
  selector: "app-claim-page",
  templateUrl: "./claim-page.component.html",
  styleUrls: ["./claim-page.component.css"],
})
export class ClaimPageComponent implements OnInit {
  allClaims: Array<Object> = allClaimsJSON ? allClaimsJSON.module : [];
  searchText: string;
  asideVisible = false;
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
  formClickHandler(extension) {
    this.router.navigate([`/${extension}`]);
  }
  openAside(e) {
    e.stopPropagation();
    e.preventDefault();
    this.asideVisible = true;
  }
  closeAside(e){
    e.stopPropagation();
    e.preventDefault();
    this.asideVisible = false;
  }

  constructor(public router: Router) {}

  ngOnInit() {
    console.log("alllll claims", this.allClaims);
  }
}
