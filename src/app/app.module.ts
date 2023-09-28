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
import { AddPetReactiveComponent } from './add-pet-reactive/add-pet-reactive.component';
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section4Component } from './section4/section4.component';

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
    RegisterClinicComponent,
  AddPetReactiveComponent,
  NavbarComponent,
  ContainerComponent,
  FooterComponent,
  Section1Component,
  Section2Component,
  Section3Component,
  Section4Component




  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
   ReactiveFormsModule,
   FormsModule,
    FileUploadModule,
    DropdownModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
