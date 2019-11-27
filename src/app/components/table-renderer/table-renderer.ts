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

  // getTotal = () => {
  //   type claim = {
  //     value: any;
  //     type: string;
  //   };
  //   return this.data.reduce(
  //   (acc: number, item: Array<claim>) => parseInt(item[3].value) + acc,
  //   0
  // )}

  ngOnInit() {
  }
}
