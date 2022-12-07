import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { HomeComponent } from './componentes/cliente/home/home.component';
import { AvisoComponent } from './componentes/cliente/aviso/aviso.component';
import { LoginComponent } from './componentes/admin/login/login.component';
import { TablaAvisosComponent } from './componentes/admin/tabla-avisos/tabla-avisos.component';
import { TablaAdminsComponent } from './componentes/admin/tabla-admins/tabla-admins.component';
import { SubirModificarAvisoComponent } from './componentes/admin/subir-modificar-aviso/subir-modificar-aviso.component';
import { SubirModificarAdminComponent } from './componentes/admin/subir-modificar-admin/subir-modificar-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginadoComponent } from './componentes/cliente/paginado/paginado.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    PiePaginaComponent,
    HomeComponent,
    AvisoComponent,
    LoginComponent,
    TablaAvisosComponent,
    TablaAdminsComponent,
    SubirModificarAvisoComponent,
    SubirModificarAdminComponent,
    PaginadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
