import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChooseFormComponent } from './choose-form/choose-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterClinicComponent } from './register-clinic/register-clinic.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ChooseFormComponent,
    RegisterClinicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
   ReactiveFormsModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
