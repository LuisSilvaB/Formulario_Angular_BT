export class Empleado{
   Nombre:string = ""; 
   edad:number = 0;
   cargo:string = ""; 
   salario:number = 0; 

    constructor(Nombre:string,edad:number,cargo:string,salario:number){
       this.Nombre = Nombre, 
       this.edad = edad,
       this.cargo = cargo,
       this.salario = salario
    } 
    
}