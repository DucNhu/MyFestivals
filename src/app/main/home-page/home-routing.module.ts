import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BigFestivalsComponent } from './big-festivals/big-festivals.component';
import { HotFestivalComponent } from './hot-festival/hot-festival.component';
import { FestivalBooksComponent } from './festival-books/festival-books.component';
const routes: Routes = [
    { path: 'big-festivals', component: BigFestivalsComponent },
    { path: 'hot-festivals', component: HotFestivalComponent },
    { path: 'festival-books', component: FestivalBooksComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule { }