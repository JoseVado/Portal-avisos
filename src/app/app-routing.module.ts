import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoComponent } from './componentes/cliente/aviso/aviso.component';
import { HomeComponent } from './componentes/cliente/home/home.component';
import { LoginComponent } from './componentes/admin/login/login.component';
import { TablaAvisosComponent } from './componentes/admin/tabla-avisos/tabla-avisos.component';
import { SubirModificarAvisoComponent } from './componentes/admin/subir-modificar-aviso/subir-modificar-aviso.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aviso', component: AvisoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tabla-avisos', component: TablaAvisosComponent },
  { path: 'subir-aviso', component: SubirModificarAvisoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
