import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/components/auth.service';

@Component({
  selector: 'app-tusers',
  templateUrl: './tusers.component.html',
  styleUrls: ['./tusers.component.css']
})
export class TusersComponent {

  p:number=1;
  itemsPerPage:number=6;
  userData: any;

  constructor(private userService:AuthService){}

  ngOnInit(){
    this.getAuthUser();
  }


  getAuthUser(){
    this.userService.getUserData().subscribe(
      (data) => {
        this.userData = data;
        console.log(this.userData );

      },
      (error) => {
        console.error(error);
      }
    );
  }
}
