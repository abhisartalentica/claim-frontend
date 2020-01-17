import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-claim-detail",
  templateUrl: "./claim-detail.component.html",
  styleUrls: ["./claim-detail.component.css"]
})
export class ClaimDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  DOMESTIC_CLAIM = "domestic";
  FOREIGN_CLAIM = "foreign";
  EXPENSE_CLAIM = "expense";
  LOCAL_CONVEYANCE_CLAIM = "localConveyance";

  claimType: String;
  dummy = [
    [
      {
        value: 10,
        type: "date"
      },
      {
        value: "abhisar",
        type: "text"
      },
      {
        value: "25/09/2019",
        type: "date"
      },
      {
        value: "24/09/2019",
        type: "date"
      },
      {
        value: 10000,
        type: "number"
      },
      {
        value: "yes",
        type: "select"
      }
    ]
  ];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.claimType = params.get("claimType");
    });
  }
}
