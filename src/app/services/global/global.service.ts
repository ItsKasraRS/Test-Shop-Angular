import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginUserDTO } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  productsList(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/');
  }

  loginUser(model: LoginUserDTO): Observable<any> {
    return this.http.post('https://fakestoreapi.com/auth/login', model);
  }

  signInToken(status: boolean) {
    this.isAuthenticated.next(status);
  }
  isUserAuthenticated(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }
  checkAuth() {
    if(localStorage.getItem('token') != null) {
      this.isAuthenticated.next(true);
    }
    else {
      this.isAuthenticated.next(false);
    }
  }
  getProductById(id: number): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/'+id);
  }
}
