import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-subir-modificar-aviso',
  templateUrl: './subir-modificar-aviso.component.html',
  styleUrls: ['./subir-modificar-aviso.component.css']
})
export class SubirModificarAvisoComponent implements OnInit {

  aviso : any = {
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



}
