import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserDetail } from 'src/app/models/user-detail';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  decodedToken: UserDetail;
  helper = new JwtHelperService();

  LoginForm = new FormGroup({
    UserName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(25)
    ]),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10)
    ])
  });



  constructor(private loginService : LoginService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit() : void {
      

  }

  onLogin() {
    // console.log(this.LoginForm.value);
    this.loginService.UserLogin(this.LoginForm.value).subscribe(
      Response=> 
      { console.log(Response);
        const token : any = Response;
        this.decodedToken = this.helper.decodeToken(JSON.stringify(token.token));
        console.log(this.decodedToken);
        this.decodedToken.jwtToken = token.token;
        sessionStorage.setItem('user', JSON.stringify(this.decodedToken));
        this.router.navigate(['user/viewDeliveryDetails'], );
    },
    err => {
      console.log(err);
      alert('Login Failed');
    }
  );

    }
  }



