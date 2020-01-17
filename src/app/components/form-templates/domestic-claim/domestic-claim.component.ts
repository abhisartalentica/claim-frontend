import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  OnChanges
} from "@angular/core";
import * as jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { domestiClaimModel } from "../util/claims-type.model";
import { fieldTypeMapping, tableType } from "../../../util/constant";

@Component({
  selector: "domestic-claim",
  templateUrl: "./domestic-claim.component.html",
  styleUrls: ["../../../app.component.css"]
})
export class DomesticClaimComponent implements OnInit, OnChanges {
  domesticForm: FormGroup;
  @ViewChild("#content", { static: false }) content: ElementRef;
  @Input("domestiClaimData") domestiClaimData: Object = domestiClaimModel;
  headerLocalTravel: any;
  dataLocalTravel: any;
  headerHotels: any;
  dataHotels: any;
  headerMeals: any;
  dataMeals: any;
  dataInterCityTravels: any;
  headerInterCityTravels: any;

  createTableData(rawData) {
    let tables = rawData["tables"];
    tables.map(tableName => {
      let tableData = rawData[tableName];
      if (tableName === tableType.LOCAL_TRAVEL) {
        this.headerLocalTravel = Object.keys(tableData[0]);
        this.dataLocalTravel = this.createRowData(
          tableData,
          this.headerLocalTravel
        );
        console.log("table 11", this.dataLocalTravel, this.headerLocalTravel);
      }
      if (tableName === tableType.INTERCITY_TRAVEL) {
        this.headerInterCityTravels = Object.keys(tableData[0]);
        this.dataInterCityTravels = this.createRowData(
          tableData,
          this.headerInterCityTravels
        );
      }
      if (tableName === tableType.HOTEL) {
        this.headerHotels = Object.keys(tableData[0]);
        this.dataHotels = this.createRowData(tableData, this.headerHotels);
        console.log("table 12", this.dataLocalTravel, this.headerLocalTravel);
      }
      if (tableName === tableType.MEALS) {
        this.headerMeals = Object.keys(tableData[0]);
        this.dataMeals = this.createRowData(tableData, this.headerMeals);
        console.log("table 13", this.dataLocalTravel, this.headerLocalTravel);
      }
      if (tableName === tableType.OTHER_EXPENSES) {
      }
    });
  }

  createRowData(tableData, header) {
    console.log("table 2", tableData, header);
    return tableData.map(eachRow => {
      return header.map(key => {
        let obj = {};
        obj["value"] = eachRow[key];
        obj["type"] = fieldTypeMapping[key];
        obj["key"] = key;
        console.log("table 3", obj);
        return obj;
      });
    });
  }

  jsonDomesticClaimData = {
    uid: "",
    employee_name: "Namrata",
    trip_purpose: "Its a secret",
    dates: {
      leave: "5/2/2020",
      return: "7/2/2020"
    },
    tables: [
      "intercity_travel",
      "hotel",
      "meals",
      "local_travel",
      "other_expenses"
    ],
    intercity_travel: [
      {
        date: "1/11/2020",
        mode: "spaceship",
        from_date: "5/2/2020",
        to_date: "7/2/2020",
        amount: 10000,
        paid_by_me: true
      }
    ],
    hotel: [
      {
        from_date: "5/2/2020",
        to_date: "7/2/2020",
        hotel: "Hotel trasylvania",
        city: "Bistria",
        amount: 100000,
        paid_by_me: true,
        supporting: 111
      }
    ],
    meals: [
      {
        date: "1/11/2020",
        total: 1000,
        particulars: "no idea what this field is for :|",
        supporting: 4545
      }
    ],
    local_travel: [],
    other_expenses: [],
    claimType: "domestic_claim"
  };

  dataOtherExpanse = [
    [
      {
        value: "2019-12-12",
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
      }
    ]
  ];

  constructor(private fb: FormBuilder) {}

  claimFormSubmit() {}
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
    console.log("dvchvhfb", data);
    // return 7
    return data
      ? data.reduce(
          (acc: number, item: Array<claim>) => parseInt(item[n].value) + acc,
          0
        )
      : 0;
  };
  ngOnChanges() {
    this.createTableData(this.domestiClaimData);
  }

  ngOnInit() {
    console.log("dvchvhfb", this.dataLocalTravel);
    this.createTableData(this.domestiClaimData);
    this.domesticForm = this.fb.group({
      employeeName: "",
      tripDetail: ""
    });
  }
}
