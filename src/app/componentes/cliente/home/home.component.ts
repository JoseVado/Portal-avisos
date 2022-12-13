import { Component, OnInit } from '@angular/core';
import { AvisoModel } from 'src/app/modelo/aviso.model';
import { AvisoServicio } from 'src/app/servicios/aviso.service';
//import { PaginaPrincipalHelper } from 'src/app/servicios/paginado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  avisos: AvisoModel[];
  totalLenght: number;
  page: number = 1;
  items: number = 6;

  constructor(
    //private paginadoServicio: PaginaPrincipalHelper,
    private avisoServicio: AvisoServicio,
  ) { }

  ngOnInit(): void {
    this.avisoServicio.getAvisos().subscribe((avisos) => {
      this.avisos = avisos;
      this.totalLenght = avisos.length;
    });
  }
}
