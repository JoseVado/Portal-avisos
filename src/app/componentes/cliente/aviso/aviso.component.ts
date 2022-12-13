import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisoModel } from 'src/app/modelo/aviso.model';
import { AvisoServicio } from 'src/app/servicios/aviso.service';
import { FileUploadService } from 'src/app/servicios/fileUpload.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css'],
})
export class AvisoComponent implements OnInit {
  id: string;
  aviso: AvisoModel|null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fileUploadServicio: FileUploadService,
    private avisoServicio: AvisoServicio
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.avisoServicio.getAviso(this.id).subscribe(aviso => {
      this.aviso = aviso;
    })
  }
}
