import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: "local-conveyance-claim",
  templateUrl: "./local-conveyance-claim.component.html",
  styleUrls: ["../../../app.component.css"],
})
export class LocalConveyanceClaimComponent implements OnInit {
  @ViewChild("#content", { static: false }) content: ElementRef;

  dataType = ["string", "string", "boolean"];
  header = ["Date", "Particular", "Amount", "Supporting", "Paid"];
  data = [
    [
      {
        value: 10,
        type: "date",
      },
      {
        value: "abhisar",
        type: "text",
      },
      {
        value: "abhisar",
        type: "text",
      },
      {
        value: 10,
        type: "number",
      },
      {
        value: "yes",
        type: "select",
      },
    ],
    [
      {
        value: 10,
        type: "date",
      },
      {
        value: "abhisar",
        type: "text",
      },
      {
        value: "abhisar",
        type: "text",
      },
      {
        value: 10,
        type: "number",
      },
      {
        value: "yes",
        type: "select",
      },
    ],
    [
      {
        value: 10,
        type: "date",
      },
      {
        value: "abhisar",
        type: "text",
      },
      {
        value: "abhisar",
        type: "text",
      },
      {
        value: 10,
        type: "number",
      },
      {
        value: "yes",
        type: "select",
      },
    ],
    [
      {
        value: 10,
        type: "date",
      },
      {
        value: "abhisar",
        type: "text",
      },
      {
        value: "abhisar",
        type: "text",
      },
      {
        value: 10,
        type: "number",
      },
      {
        value: "yes",
        type: "select",
      },
    ],
  ];
  constructor() {}

  downloadPDF() {
    html2canvas(document.querySelector("#content")).then(canvas => {
      var pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
      console.log(canvas.width);
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, 0, 0, canvas.width-200, canvas.height);
      pdf.save("converteddoc.pdf");
    });
  }
  getTotal = () => {
    type claim = {
      value: any;
      type: string;
    };
    return this.data.reduce(
      (acc: number, item: Array<claim>) => parseInt(item[3].value) + acc,
      0
    );
  };

  ngOnInit() {}
}
