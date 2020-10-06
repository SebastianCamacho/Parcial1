import { Injectable } from '@angular/core';
import { Persona } from '../apoyo/models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('datos'));
  }
  post(persona: Persona): string {
    //validar identificacion repetida
    if (this.validarId(persona.identificacion)) {
      //validar Capacidad de rubro
      if (this.validarRubro(persona.valorDeApoyo)) {
        let personas: Persona[] = [];
        if (this.get() != null) {
          personas = this.get();
        }
        personas.push(persona);
        localStorage.setItem('datos', JSON.stringify(personas));
        return "Se Agrego una nueva persona con identificacion: " + persona.identificacion;
      }
      return "Saldo insuficiente";
    }
    return "Esta identificacion ya está registrada";

  }

  validarId(Id: string): boolean {
    let personas: Persona[];
    personas = this.get();
    if (personas == null) {
      return true;
    }
    for (let item of personas) {
      if (item.identificacion === Id) {
        return false;
      }
    };
    return true;
  }
  validarRubro(valor: number): boolean {
    let personas: Persona[];
    personas = this.get();
    if (personas == null) {
      return true;
    }
    var suma: number;
    suma = 0;
    for (let item of personas) {
      suma = suma + item.valorDeApoyo;
      
    }
    if (600000000 - suma > valor) {
      return true;
    }
    return false;
  }


}
