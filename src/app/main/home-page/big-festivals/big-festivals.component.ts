import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-festivals',
  templateUrl: './big-festivals.component.html',
  styleUrls: ['./big-festivals.component.css']
})
export class BigFestivalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = "MOST POPULAR FESTIVALS";
  
  mostFestivals = [
    {
    link: 'FesArticle',
    image: './../../assets/Images/B.H.valenteen1.jpg',
    name: 'Hot air balloon festival',
    add: 'SUN \'n FUN Expo Campus',
    timeFirst: '28/02/2020',
    timeLast: '01/03/2020',
    price: '10'
  },
  {
    link: 'FesArticle',
    image: './../../assets/Images/B.H.valenteen1.jpg',
    name: 'Hot air balloon festival',
    add: 'SUN \'n FUN Expo Campus',
    timeFirst: '28/02/2020',
    timeLast: '01/03/2020',
    price: '10'
  }, {
    link: 'FesArticle',
    image: './../../assets/Images/B.H.valenteen1.jpg',
    name: 'Hot air balloon festival',
    add: 'SUN \'n FUN Expo Campus',
    timeFirst: '28/02/2020',
    timeLast: '01/03/2020',
    price: '10'
  }, {
    link: 'FesArticle',
    image: './../../assets/Images/B.H.valenteen1.jpg',
    name: 'Hot air balloon festival',
    add: 'SUN \'n FUN Expo Campus',
    timeFirst: '28/02/2020',
    timeLast: '01/03/2020',
    price: '10'
  }, {
    link: 'FesArticle',
    image: './../../assets/Images/B.H.valenteen1.jpg',
    name: 'Hot air balloon festival',
    add: 'SUN \'n FUN Expo Campus',
    timeFirst: '28/02/2020',
    timeLast: '01/03/2020',
    price: '10'
  },
  ]
}
