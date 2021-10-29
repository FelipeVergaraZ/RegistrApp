/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  NombreU: any;
  constructor(private router: Router){}

  logearse(){
    let navigationExtra: NavigationExtras={
      state:{NombreU:this.NombreU}
    };
    this.router.navigate(['/inicio'],navigationExtra);
  }
  logearse2(){
    let navigationExtra: NavigationExtras={
      state:{NombreU:this.NombreU}
    };
    this.router.navigate(['/inicio2'],navigationExtra);
  }

  registrar(){
    let navigationExtra: NavigationExtras={
      state:{NombreU:this.NombreU}
    };
    this.router.navigate(['/registrar'],navigationExtra);
  }
  recuperar(){
    this.router.navigate(['/recover']);
  }



}
