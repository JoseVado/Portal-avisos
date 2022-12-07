import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoComponent } from './componentes/cliente/aviso/aviso.component';
import { HomeComponent } from './componentes/cliente/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aviso', component: AvisoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
