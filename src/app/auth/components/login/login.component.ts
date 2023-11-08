import { Component, OnInit   } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  error :any ;
  loginform: FormGroup;
  invalidLogin = false;
  constructor(private fb: FormBuilder , private router: Router, private route: ActivatedRoute ,private AuthService:AuthService) {
    
   
  
    this.loginform= this.fb.group({
     
      email: [
        '',
        [
          Validators.required,
          // Validators.email,

          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
        ],
      ],

     
      password: [
        '', 
        [
        Validators.required,
        Validators.minLength(8),
      ],
    ],
    
    });
  }
  ngOnInit(): void {}
    

  

  submitForm() {
    
    console.log(this.loginform);
    
    
    const storedUserData = localStorage.getItem('userArr');
    if (storedUserData) {
      const userArr = JSON.parse(storedUserData);

      // Check if the entered email and password match any stored user
      const enteredEmail = this.loginform.get('email')?.value;
      const enteredPassword = this.loginform.get('password')?.value;

      const isValidUser = userArr.some((user: { email: any; password: any; }) => {
        return user.email === enteredEmail && user.password === enteredPassword;
      });

      if (isValidUser) {
        // Navigate to home if the user is valid
        this.router.navigate(['/home']);
      } else {
        this.invalidLogin = true;
        
      }
    } else {
      this.invalidLogin = true;
      
    }  


    this.AuthService.login(this.loginform.value).subscribe(res => {
      console.log(res);
      if(res.access_token){
        localStorage.setItem('access_token' ,res.access_token )
        window.location.href="/"
        // this.router.navigate([''],{relativeTo:this.route,skipLocationChange:true});

      }
    },
    error => {
      this.error=error.error.message;
      console.log(error.error);
    });


  }
  

}   



