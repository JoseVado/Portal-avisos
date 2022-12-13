import { Component, OnInit } from '@angular/core';
import { AdminModel } from 'src/app/modelo/admin.model';
import { AdminServicio } from 'src/app/servicios/admin.service';

@Component({
  selector: 'app-tabla-admins',
  templateUrl: './tabla-admins.component.html',
  styleUrls: ['./tabla-admins.component.css']
})
export class TablaAdminsComponent implements OnInit {

  admins: AdminModel[];

  constructor(private adminServicio: AdminServicio) { }

  ngOnInit(): void {
    this.adminServicio.getAdmins().subscribe(admins => {
      this.admins = admins;
    });
  }

}
