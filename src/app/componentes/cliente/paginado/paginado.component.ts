import { Component, OnInit } from '@angular/core';
import { AvisoServicio } from 'src/app/servicios/aviso.service';
//import { PaginaPrincipalHelper } from 'src/app/servicios/paginado.service';

@Component({
  selector: 'app-paginado',
  templateUrl: './paginado.component.html',
  styleUrls: ['./paginado.component.css'],
})
export class PaginadoComponent implements OnInit {
  constructor(
    //private avisoServicio: AvisoServicio,
    //private paginadoServicio: PaginaPrincipalHelper
  ) {}

  paginacion: number[];

  ngOnInit(): void {
    /*
    this.paginadoServicio.getPaginas().subscribe((paginado) => {
      this.paginacion = paginado;
    });*/
  }

}
