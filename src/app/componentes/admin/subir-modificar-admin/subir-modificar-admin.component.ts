import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminModel } from 'src/app/modelo/admin.model';
import { AdminServicio } from 'src/app/servicios/admin.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-subir-modificar-admin',
  templateUrl: './subir-modificar-admin.component.html',
  styleUrls: ['./subir-modificar-admin.component.css'],
})
export class SubirModificarAdminComponent implements OnInit {
  admin: AdminModel = {
    id: '',
    nombre: '',
    apellido: '',
    departamento: '',
    puesto: '',
    correo: '',
  };
  email: string;
  password: string;
  id: string;

  @ViewChild('adminForm') adminForm: NgForm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminServicio,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.adminService.getAdmin(this.id).subscribe((admin) => {
        if (admin) this.admin = admin;
      });
    }
  }

  guardar({ value, valid }: { value: any; valid: boolean }) {
    if (!valid) {
      let alertaError = document.getElementById('alertaError');
      setTimeout(function () {
        alertaError!.style.display = 'none';
      }, 4000);
      alertaError!.style.display = 'inline-block';
    } else {
      if (this.id) {
        //modificar
        
        value.id = this.id;
        this.adminService.modificarAdmin(value);
        this.router.navigate(['/tabla-admin']);
      } else {
        //agregar

        this.registro();
        this.adminService.agregarAdmin(value);
        this.adminForm.resetForm();
      }
    }
  }

  registro() {
    console.log(this.admin);
    
    console.log(this.admin.correo, this.password);
    
    if (this.admin.correo)
      this.loginService
        .registrarse(this.admin.correo, this.password)
        .then((res) => {
          this.router.navigate(['/tabla-admin']);
        })
        .catch((error) => {
          alert(error);
        });
  }
}
