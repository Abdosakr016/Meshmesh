import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { PetsModule } from './pets/pets.module';
import { HomeModule } from './home/home.module';
import { PortoVeterinaryModule } from './porto_veterinary/porto-veterinary.module';
import { VetsCenterModule } from './vets-center/vets-center.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserProfileModule } from './user-profile/user-profile.module';
import { SuppliesModule } from './supplies/supplies.module';
import { AboutModule } from './about/about.module';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
  AppComponent,

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
   HomeModule,
   PetsModule,
   AuthModule,
   VetsCenterModule,
    SharedModule,
    PortoVeterinaryModule,
    UserProfileModule,
    SuppliesModule,
    AboutModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
