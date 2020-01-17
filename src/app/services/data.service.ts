import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

const SearchFilter = new BehaviorSubject("");
const configUrl = "assets/config.json";
@Injectable({
  providedIn: "root"
})
export class DataService {
  configUrl = "http://172.19.4.22:5000";
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  setFilterString(str: string) {
    console.log("setting search filter", str);
    SearchFilter.next(str);
  }
  getFilterString() {
    console.log("getting search filter");
    return SearchFilter;
  }
  getConfig() {
    // return this.http.get(configUrl);
    return SearchFilter;
  }

  getTeams() {
    return this.http.get(`${this.configUrl}/get_all_teams`);
    // return SearchFilter;
  }
  getAllClaims(employee) {
    return this.http.get(`${this.configUrl}/get_all_claims/${employee.id}`);
  }
}
