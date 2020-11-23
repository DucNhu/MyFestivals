import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-mini',
  templateUrl: './navigation-mini.component.html',
  styleUrls: ['./navigation-mini.component.css']
})
export class NavigationMiniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active = "nav1";

  ClickActive(obj: string) {
    this.active = obj;
  }

  navigation = [
    {
      link: "big-festivals",
      name: "Popular Festivals Festivals"
    },
    {
      link: "hot-festivals",
      name: "Hot Festivals"
    },
    {
      link: "festival-books",
      name: "Books of Fes"
    }
  ]
}
