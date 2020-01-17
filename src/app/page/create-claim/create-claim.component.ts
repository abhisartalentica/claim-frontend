import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-claim",
  templateUrl: "./create-claim.component.html",
  styleUrls: ["./create-claim.component.css"]
})
export class CreateClaimComponent implements OnInit {
  claimType: string;
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.claimType = params.get("claimType");
      
    });
  }
}
