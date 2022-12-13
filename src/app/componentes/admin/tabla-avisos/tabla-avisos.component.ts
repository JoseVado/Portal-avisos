import { Component, OnInit } from '@angular/core';
import { AvisoModel } from 'src/app/modelo/aviso.model';
import { AvisoServicio } from 'src/app/servicios/aviso.service';

@Component({
  selector: 'app-tabla-avisos',
  templateUrl: './tabla-avisos.component.html',
  styleUrls: ['./tabla-avisos.component.css']
})
export class TablaAvisosComponent implements OnInit {

  avisos: AvisoModel[];

  constructor(private avisoServicio: AvisoServicio) { }

  ngOnInit(): void {
    this.avisoServicio.getAvisos().subscribe((avisos) => {
      this.avisos = avisos;
    });
  }

}
