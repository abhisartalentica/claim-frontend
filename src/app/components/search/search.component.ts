import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @Input("searchText") searchString: string;
  searchFilter: string = "";

  constructor(private dataService: DataService) {}
  handleSearch() {
    console.log("search string added", this.searchFilter);
    this.dataService.setFilterString(this.searchFilter);
  }
  ngOnInit() {}
}
