import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  public onRegister = (data) => {
    return this.http.post(`${this.endpoint}/signup`, data);
  };
}
