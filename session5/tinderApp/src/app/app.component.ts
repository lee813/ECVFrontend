import { Component } from "@angular/core";
import { WebServiceService } from "./web-service.service";
import { User } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private webService: WebServiceService) {}
  title = "iTinder";
  public user: User;
  public hideDetail: Boolean = false

  ngOnInit() {
   this.loadUser()
  }

  loadUser(): void{
    this.webService.getUser().subscribe(data => {
      if (data.results) {
        const result = data.results[0];
        const newUser = new User();
        newUser.firstname = result.name.first;
        (newUser.age = result.dob.age), (newUser.avatar = result.picture.large);
        newUser.location = result.location.city + ', ' +result.location.state
        this.user = newUser;
      }
    });
  }

  next(): void {
    this.loadUser()
  }

  loadFavorite(): void {
    this.hideDetail = true
  }
  loadFind(): void {
    this.hideDetail = false
  }
}
