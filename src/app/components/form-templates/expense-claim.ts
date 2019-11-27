import { Component, OnInit } from "@angular/core";
import { EditableTableService } from "ng-editable-table/editable-table/editable-table.service";

@Component({
  selector: "expence-claim",
  templateUrl: "./expence-claim.html",
  styleUrls: ["../../app.component.css"],
})
export class ExpenceClaimComponent implements OnInit {
  tableHeaders = ["Header 1", "Header 2", "Header 3"];
  tableRowsWithId = [[1, "Example", "Example", true]];
  dataType = ["string", "string", "boolean"];

  constructor(private service: EditableTableService) {
    // console.log(10000);
  }

  ngOnInit() {
    this.service.createTableWithIds(this.tableHeaders, this.tableRowsWithId, this.dataType);
  }
}
