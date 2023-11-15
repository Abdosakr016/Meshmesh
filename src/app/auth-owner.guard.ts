// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { UserServiceService } from './user-profile/service/user-service.service';
// import { AuthService } from './auth/components/auth.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   userData : any;
//   constructor(private router: Router,private userService: AuthService) {}
//   getAuthUser(){
//     this.userService.getUserData.subscribe(
//       (data :any) => {
//         this.userData = data;
//         console.log(this.userData );

//       },
//       (error) => {
//         console.error(error);
//       }
//     );}
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const token = localStorage.getItem('access_token');
   
//     if (token) {
//       return true;
//     } else {
//       this.router.navigate(['login']);
//       return false;
//     }
//   }
// }