import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './services/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = false;
  title = 'Chat-App';
  constructor(private router: Router, private service: GlobalService) {
    this.service.checkAuth();
    this.service.isUserAuthenticated().subscribe(res=> {
      this.isAuthenticated = res;
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.service.signInToken(false);
    this.router.navigate(['/login']);
  }
}
