import { Component, OnInit } from '@angular/core';
import { FavoriteServiceService } from '../favorite-service.service';
import { User } from '../user';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public favList: User[] = []

  constructor(public favoriteService: FavoriteServiceService) { }

  ngOnInit() {
    console.log(this.favoriteService.favList)
    this.favList = this.favoriteService.list
    this.favoriteService.getFavList().subscribe(data => {
      this.favList = data
    })
  }

}
