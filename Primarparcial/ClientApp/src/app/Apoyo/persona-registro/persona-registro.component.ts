import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/Services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  persona:Persona;
  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    this.persona=new Persona;
  }
  add(){
    alert(this.personaService.post(this.persona));
    
  }


}
