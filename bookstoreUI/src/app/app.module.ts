import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookPageComponent } from './book-page/book-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { LoanPageComponent } from './loan-page/loan-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookPageComponent,
    CustomerPageComponent,
    LoanPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
