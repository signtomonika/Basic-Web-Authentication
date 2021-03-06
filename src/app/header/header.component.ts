import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  isAuthenticated() {

    //console.log(this.authService.isAuthenticated());

return this.authService.isAuthenticated() ;

  }

  onLogOut() {

    this.authService.logOut();

  }

  onDeleteUser() {

    this.authService.deleteUser();
    
  }

}
