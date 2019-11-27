import { Component, OnInit } from "@angular/core";

@Component({
  selector: "expence-claim",
  templateUrl: "./expence-claim.html",
  styleUrls: ["../../app.component.css"],
})
export class ExpenceClaimComponent implements OnInit {
  tableHeaders = ["Header 1", "Header 2", "Header 3"];
  tableRowsWithId = [[1, "Example", "Example", true]];
  dataType = ["string", "string", "boolean"];

  constructor() {
    console.log(10000);
  }

  ngOnInit() {
  }
}
