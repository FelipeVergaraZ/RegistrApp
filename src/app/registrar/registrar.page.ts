/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BdLocalService } from '../services/bd-local.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  NombreU: string;
  password: string;
  correo: string;

  constructor(private router: Router, private bdLocal: BdLocalService, public toastController: ToastController) { }

  volver(){
    this.router.navigate(['/home']);
  }


  registrarU(){
    this.bdLocal.guardarContactos(this.NombreU,this.password,this.correo);
  }
  envioregistro(){
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Se ha registrado la cuenta correctamente',
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
