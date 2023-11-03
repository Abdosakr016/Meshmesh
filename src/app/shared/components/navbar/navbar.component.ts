import { Component } from '@angular/core';
import { CounterService } from 'src/app/cart/service/counter/count.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/components/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  count: number = 0;
  username: string = '';
  userLogin: any;
  userData: any;
  error:any;
  constructor(private counter: CounterService,private router: Router,private userService: AuthService) {}

  ngOnInit() {
    const access_token = localStorage.getItem('access_token'); // Check for 'access_token'
    if (access_token) {
      this.userLogin = true; 
    } else {
      this.userLogin = false;
    }
//*________________to get user data______________

    // this.userService.getUserData().subscribe(
    //   (data) => {
    //     this.userData = data;
    //     console.log(data); 

    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
  }
  

  logout() {
    const access_token = localStorage.getItem('access_token'); // Check for 'access_token'
    
    localStorage.removeItem('access_token');
    // this.userService.logout(access_token).subscribe(res => {
    //   // console.log(res);
    //   if(! res.access_token){
    //     // localStorage.setItem('access_token' ,res.access_token )
    //     this.router.navigate(['login']);

    //   }
    // },
    // error => {
    //   this.error=error.error.message;
    //   console.log(error.error);
    // });


  }
    // this.username = ''; 
    // this.userLogin = false;
  
}
