import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  users:any=[]
  validUser:any=[]

  constructor(private userService:UserService ,private router:Router){}

  ngOnInit() {
    this.initializeForm()
    this.userService.getUsers().subscribe((res)=>{
      this.users=res;
      console.log(this.users);
      
    })
  }

  initializeForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  submit() {
    let formData = this.loginForm.getRawValue();

    let email = formData.email;
    let emailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    let password = formData.password;
    let flag = true;

    if (!email || !email.match(emailRegex)) {
      alert('invalid email or password');
      return (flag = false);
    } else if (password.length < 8) {
      alert('invalid email or password');
      return (flag = false);
    }

    if (flag == true) {
      console.log('FormData : ', formData);
    }
    debugger
    if(this.users.length>0){
    console.log(this.users[0].email)
        for(let i=0;i<this.users.length;i++){
          if(this.users[i].email===email && this.users[i].password){
            console.log("login",email);
            sessionStorage.setItem()
            this.router.navigate(['home']);

          }
        }
    }




    return flag;
  }
}
