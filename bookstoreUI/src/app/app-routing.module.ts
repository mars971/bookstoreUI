import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu/menu.component';
import { BookPageComponent } from './book-page/book-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { LoanPageComponent } from './loan-page/loan-page.component';


const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'book-page', component: BookPageComponent},
  {path: 'customer-page', component: CustomerPageComponent},
  {path: 'loan-page', component: LoanPageComponent},
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
