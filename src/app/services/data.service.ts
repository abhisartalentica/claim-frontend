import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

const SearchFilter = new BehaviorSubject("");

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  setFilterString(str: string) {
    console.log("setting search filter", str);
    SearchFilter.next(str);
  }
  getFilterString() {
    console.log("getting search filter");
    return SearchFilter;
  }
}
