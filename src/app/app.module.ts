import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChooseFormComponent } from './choose-form/choose-form.component';
import { RegisterClinicComponent } from './register-clinic/register-clinic.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  AppComponent,
  ProductListComponent,
  CardComponent,
  CartComponent,
    RegisterComponent,
    LoginComponent,
    ChooseFormComponent,
    RegisterClinicComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
   ReactiveFormsModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
