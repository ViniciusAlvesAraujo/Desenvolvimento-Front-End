import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { AnimesComponent } from './components/views/animes/animes.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "/animes", component: AnimesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
