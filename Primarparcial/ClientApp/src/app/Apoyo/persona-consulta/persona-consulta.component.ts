import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

  personas: Persona[];
  searchText: string;
  constructor() { }

  ngOnInit() {
    this.personas = [
      {identificacion:"1111", nombre:"Juan", sexo:"M" ,edad:3, departamento:"cesar", ciudad:"Valledupar", valorDeApoyo:200000, modalidad:"alimentario", fecha:"2020/10/06"},
      {identificacion:"12585", nombre:"andres", sexo:"M" ,edad:3, departamento:"cesar", ciudad:"urumita", valorDeApoyo:200000, modalidad:"economico", fecha:"2020/10/06"},
      
      ]
  }

}
