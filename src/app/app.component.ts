import { Component } from '@angular/core';
import {Empleado} from "./Empleado.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormularioDirectivasv2';
  Name:string="";
  edad:number=0;
  Carg:string=""; 
  Salar:number=0; 

   Empleados:Empleado[]=[]

   CrearEmpleado(){
     let NuevoEmpleado = new Empleado(this.Name,this.edad,this.Carg,this.Salar)  
     this.Empleados.push(NuevoEmpleado); 
   }

}






