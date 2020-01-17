import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "table-renderer",
  templateUrl: "./table-renderer.html",
  styleUrls: ["../../app.component.css"],
})
export class TableRenderer implements OnInit {
  @Input("header") header: Array<string> = [];
  @Input("data") data: Array<Array<Object>> = [];
  @Input("total") total: number = 0;
  @Input("inputType") inputType: string = "Table"
  checkIfValidInput = type => ["number", "text", "date"].includes(type);

  constructor() {}
 
  addRow() {
    type claim = {
      value: string;
      type: string;
    };
    const newRow = JSON.parse(JSON.stringify(this.data[0])).map(function(
      item: claim
    ) {
      item.value = null;
      return item;
    });
    this.data.push(newRow);
  }

  ngOnInit() {
  }
}
