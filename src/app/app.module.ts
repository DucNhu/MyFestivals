import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './main/banner/banner.component';

import { HomePageComponent } from './main/home-page/home-page.component';
import { BigFestivalsComponent } from './main/home-page/big-festivals/big-festivals.component';
import { HotFestivalComponent } from './main/home-page/hot-festival/hot-festival.component';
import { FestivalBooksComponent } from './main/home-page/festival-books/festival-books.component';
import { MediaComponent } from './main/home-page/media/media.component';
import { NavigationMiniComponent } from './main/home-page/navigation-mini/navigation-mini.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BannerComponent,
    HomePageComponent,
    BigFestivalsComponent,
    HotFestivalComponent,
    FestivalBooksComponent,
    MediaComponent,
    NavigationMiniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
