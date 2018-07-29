import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {

  public favList:Subject<User []> = new Subject();
  public list:User[] = []

  constructor() { }

  addFav(newFav: User): void {
    this.list.push(newFav)
    this.favList.next(this.list)
  }

  getFavList():  Observable<User[]> {
    console.log(this.favList)

    return this.favList
  }

}
