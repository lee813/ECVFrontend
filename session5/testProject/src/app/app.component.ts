import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  
  title = 'tour of heroes';
  hero: Hero = {
    id: 1,
    name: 'superman'
  };
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .then(test => {
      console.log(test);
      this.heroes = test;
    });
  }
}
