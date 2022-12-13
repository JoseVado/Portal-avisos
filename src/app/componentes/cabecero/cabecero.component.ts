import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
//import { ConfiguracionServicio } from 'src/app/servicios/configuracion.service';
//import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  isCollapsed = true;
  isDropdownCollapsed = true;
  isLoggedInt: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    
    this.loginService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedInt = true;
      } else {
        this.isLoggedInt = false;
      }
    });

    
  }
  logout() {
    //this.loginService.logout();
    this.isLoggedInt = false;
    this.router.navigate(['/login']);
  }
}
