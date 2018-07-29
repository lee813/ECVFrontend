import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "./user";
import { Observable } from "../../node_modules/rxjs";

@Injectable({
  providedIn: "root"
})
export class WebServiceService {
  constructor(private http: HttpClient) {}

  // getList(): Observable<User[]> {
  //   return this.http
  //     .get("https://randomuser.me/api?results=10")
  //     .subscribe(data => Observable.of(data.results.map(user => {
  //       let newUser = new User()
  //       newUser.firstname = user.name.first
  //       newUser.age = user.dob.age,
  //       newUser.avatar = user.picture.large
  //       return newUser
  //     })));
  // }

  getUser(): Observable<any>{
    return this.http.get("https://randomuser.me/api")
  }
}
