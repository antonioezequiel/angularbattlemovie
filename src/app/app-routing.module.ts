import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './componentes/pages/create-user/create-user.component';
import { PageNotFoundComponent } from './componentes/pages/erro/page-not-found/page-not-found.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { NewPlayComponent } from './componentes/pages/new-play/new-play.component';
import { SortearComponent } from './componentes/pages/sortear/sortear.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'batalha/new', component: NewPlayComponent},
  {path: 'batalhas/ranking', component: HomeComponent},
  {path: 'batalhas/sortear', component: SortearComponent},
  {path: 'create-user/new', component: CreateUserComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
