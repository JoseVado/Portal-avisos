import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subir-modificar-admin',
  templateUrl: './subir-modificar-admin.component.html',
  styleUrls: ['./subir-modificar-admin.component.css']
})
export class SubirModificarAdminComponent implements OnInit {

  admin : any = {
  };

  constructor() { }

  ngOnInit() {}

  



  guardar({value, valid}: {value:any, valid:boolean}){ 
    if(!valid){
      let alertaError = document.getElementById("alertaError");
      setTimeout(function(){
        alertaError!.style.display = 'none';
      }, 4000);
      alertaError!.style.display = 'inline-block';
    }
    
    
  }

  eliminar(){ }

}
