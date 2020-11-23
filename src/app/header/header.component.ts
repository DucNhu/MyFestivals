import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './font-style.css', './logo.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Array logo
  logo = ["F", "e", "s", "t", "i", "v", "a", "l"];

  // List Menu
  sub_menu =
    {
      OutSide: [
        { NameFes: "Side", link: "FesArticle" },
        { NameFes: "Sport", link: "FesArticle" },
        { NameFes: "Music", link: "FesArticle" },
        {
          NameFes: "Seasonal",
          sub__menu__box: true,
          sub__menu__itemlv2: [
            { NameFes: "Spring", link: 'FesArticle' },
            { NameFes: "Summer", link: 'FesArticle' },
            { NameFes: "Fall", link: 'FesArticle' },
            { NameFes: "Winter", link: 'FesArticle' }]
        },
        { NameFes: "Food", link: "FesArticle" },
        { NameFes: "Light", link: "FesArticle" },
        { NameFes: "Fireworks", link: "FesArticle" },
        { NameFes: "Flower", link: "FesArticle" }
      ],
      InHome: [
        { NameFes: 'Technology', link: 'FesArticle' },
        { NameFes: 'Ancient', link: 'FesArticle' },
        { NameFes: 'Fashion', link: 'FesArticle' },
        { NameFes: 'Art', link: 'FesArticle' },
        {
          NameFes: 'Date',
          link: '/',
          sub__menu__box: true,
          sub__menu__itemlv2: [
            { NameFes: 'Noel', link: 'FesArticle' },
            { NameFes: 'HalloWeen', link: 'FesArticle' }
          ]
        }
      ]
    }

  // effect click
  activeTab = 'Home';
  clickTabOn(tab: string) {
    this.activeTab = tab;
  }
}
