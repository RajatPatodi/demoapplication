import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadexcelComponent } from './readexcel/readexcel.component';

const routes: Routes = [
  {path:'',redirectTo:'read-excel',pathMatch:'full'},
  {path:'read-excel',component:ReadexcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
