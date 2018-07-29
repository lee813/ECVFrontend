import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { FavoriteServiceService } from '../favorite-service.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  @Input() user:User
  @Output() public goNext: EventEmitter<any> = new EventEmitter()
  constructor(public favoriteService: FavoriteServiceService) { }

  ngOnInit() {}

  onClickNext(): void{
    this.goNext.emit()
  }

  onClickFav(user: User) : void{
    this.favoriteService.addFav(user)
  }

}
