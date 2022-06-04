import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReadexcelComponent } from './readexcel/readexcel.component';

const routes: Routes = [
  {path:'',redirectTo:'read-excel',pathMatch:'full'},
  {path:'read-excel',component:ReadexcelComponent},
  {path:'about-me',component:AboutMeComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
