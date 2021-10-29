import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from '../components/componente1/componente1.component';
import { Inicio2Page } from './inicio2.page';



const routes: Routes = [
  {
    path: '',
    component: Inicio2Page,
      children:[
        {
          path:'alumnos',
          component:Componente1Component
        }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Inicio2PageRoutingModule {}
