import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  configUrl = "http://172.19.4.22:5000";
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("userData");
    // true or false
    return !!(token && token.length > 0);
  }

  public signUp(userData) {
    return this.http.post(`${this.configUrl}/create_employee `, userData);
  }

  public Login(userData) {
    console.log("userdata", userData);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          userData.username + ":" + userData.password
        )}`
      })
    };
    return this.http.get(`${this.configUrl}/login`, httpOptions);
  }
}
