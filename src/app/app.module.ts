import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat/';
import {
  AngularFirestoreModule,
  SETTINGS,
} from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { FormsModule } from '@angular/forms';

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
import { LoginService } from './servicios/login.service';
import { FileUploadService } from './servicios/fileUpload.service';
import { AvisoServicio } from './servicios/aviso.service';
import { AdminServicio } from './servicios/admin.service';
import { AuthGuard } from './guardan/auth.guard';

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
    PaginadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
  ],
  providers: [
    LoginService,
    FileUploadService,
    AvisoServicio,
    AdminServicio,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
