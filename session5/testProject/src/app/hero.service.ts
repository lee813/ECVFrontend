import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  constructor() { }
  getHeroes(): Promise<Hero[]> {
    console.log(HEROES);
    return Promise.resolve(HEROES);
  }

}
