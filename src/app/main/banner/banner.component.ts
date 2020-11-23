import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  styles: ['.box__banner {background: no-repeat center / cover url("https://images.prismic.io/tomorrowland/1e8f0887-1b71-4166-92c9-c0515ccc51a0_NYE+slider.jpg?auto=compress,format"); }']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    { img: "../../../assets/Images/B.H.valenteen1.jpg" },
    { img: "../../../assets/Images/B.H.valenteen1.jpg" },
    { img: "../../../assets/Images/B.H.valenteen1.jpg" },
    { img: "../../../assets/Images/B.H.valenteen1.jpg" }
  ];

  slideConfig = {
    "slidesToShow": 2, "slidesToScroll": 2, dots: false,
    "infinite": false, "arrows": false, "focusOnSelect": true, "zIndex": 1000
  };

}
