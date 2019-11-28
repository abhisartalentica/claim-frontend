import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";

@Component({
  selector: "foreign-claim",
  templateUrl: "./foreign-claim.component.html",
  styleUrls: ["../../../app.component.css"],
})
export class ForeignClaimComponent implements OnInit {
  @ViewChild("#content", { static: false }) content: ElementRef;

  headerInterCityTravels = [
    "DATE",
    "MODE",
    "FROM",
    "TO",
    "AMOUNT",
    "Paid By Co.",
    "CURR",
    "SUPPORTING"
  ];
  headerHotels = [
    "FROM",
    "TO",
    "CITY",
    "HOTEL",
    "AMOUNT",
    "PD BY CO",
    "SUPPORTING",
    "CURR"
  ];
  headerMeals = ["DATE", "PARTICULARS", "TOTAL", "SUPPORTING", "CURR"];
  headerLocalTravel = ["DATE", "MODE", "FROM", "TO", "PURPOSE", "AMOUNT", "CURR", "PAID BY"];
  headerOtherExpanse = ["DATE", "PARTICULARS", "AMOUNT", "SUPPORTING", "CURR", "PAID BY"];
  dataMeals = [
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
        value: "25/09/2019",
        type: "date",
      },
      {
        value: "24/09/2019",
        type: "date",
      },
    ],
  ];
  dataHotels = [
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
        value: "25/09/2019",
        type: "date",
      },
      {
        value: "24/09/2019",
        type: "date",
      },
      {
        value: 10000,
        type: "number",
      },
      {
        value: "yes",
        type: "select",
      },
    ],
  ];
  dataLocalTravel = [
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
        value: "25/09/2019",
        type: "date",
      },
      {
        value: "24/09/2019",
        type: "date",
      },
      {
        value: 10000,
        type: "number",
      },
      {
        value: "yes",
        type: "select",
      },
    ],
  ];
  dataOtherExpanse = [
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
        value: "25/09/2019",
        type: "date",
      },
      {
        value: "24/09/2019",
        type: "date",
      },
    ],
  ];
  dataInterCityTravels = [
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
        value: "25/09/2019",
        type: "date",
      },
      {
        value: "24/09/2019",
        type: "date",
      },
      {
        value: 10000,
        type: "number",
      },
      {
        value: "yes",
        type: "select",
      },{
        value: 10,
        type: "date",
      },
      {
        value: "abhisar",
        type: "text",
      },
    ],
  ];
  constructor() {}

  downloadPDF() {
    html2canvas(document.querySelector("#content")).then(canvas => {
      var pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, 0, 0, canvas.width - 150, canvas.height);
      pdf.save("converteddoc.pdf");
    });
  }
  getTotal = (data, n) => {
    type claim = {
      value: any;
      type: string;
    };
    return data.reduce(
      (acc: number, item: Array<claim>) => parseInt(item[n].value) + acc,
      0
    );
  };

  ngOnInit() {}
}
