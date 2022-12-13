import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoComponent } from './componentes/cliente/aviso/aviso.component';
import { HomeComponent } from './componentes/cliente/home/home.component';
import { LoginComponent } from './componentes/admin/login/login.component';
import { TablaAvisosComponent } from './componentes/admin/tabla-avisos/tabla-avisos.component';
import { SubirModificarAvisoComponent } from './componentes/admin/subir-modificar-aviso/subir-modificar-aviso.component';
import { TablaAdminsComponent } from './componentes/admin/tabla-admins/tabla-admins.component';
import { SubirModificarAdminComponent } from './componentes/admin/subir-modificar-admin/subir-modificar-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aviso/:id', component: AvisoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tabla-avisos', component: TablaAvisosComponent },
  { path: 'subir-aviso', component: SubirModificarAvisoComponent },
  { path: 'tabla-admin', component: TablaAdminsComponent },
  { path: 'subir-admin', component: SubirModificarAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
