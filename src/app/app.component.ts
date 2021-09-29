import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../services/auth/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'igame';
  rage: string = 'register already damn you';
  successMsg: string = '';
  failureMsg: string = '';
  temp: boolean = false;
  authorizationStatus = '';

  constructor(private apiService: ApiService) {}

  onSubmit = (form: NgForm) => {
    this.apiService.onRegister(form.value).subscribe(
      (res: any) => {
        this.authorizationStatus = res.authorized;
        this.successMsg = res.message;
      },
      (err: any) => {
        this.failureMsg = err.error.message;
      }
    );
  };
}
