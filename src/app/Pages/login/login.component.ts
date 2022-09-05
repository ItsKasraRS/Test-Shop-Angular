import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUserDTO } from 'src/app/Models/User';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup = null;
  constructor(private service: GlobalService, private _snackBar: MatSnackBar, private router: Router) {
    this.LoginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(200), Validators.minLength(5)]),
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(!this.LoginForm.valid) {
      this.LoginForm.markAllAsTouched();
    }
    else {
      const user = new LoginUserDTO(this.LoginForm.controls.username.value, this.LoginForm.controls.password.value);
      this.service.loginUser(user).subscribe(res=> {
        localStorage.setItem('token', res.token);
        this.service.signInToken(true);
        this._snackBar.open('✔  '+'You signed in successfully!', 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.router.navigate(['/products']);
      }, error => {
        this._snackBar.open('❌  '+error.error, 'Close', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      })
    }
  }
}
