import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';

  public profSelecionado: string = '';

  public professores = [
    {id: 1,nome: 'Arlindo', disciplina: 'Matemática'},
    {id: 2,nome: 'Osvaldo', disciplina: 'Português'},
    {id: 3,nome: 'Getulio', disciplina: 'História'},
    {id: 4,nome: 'Santos', disciplina: 'Inglês'},
    {id: 5,nome: 'Domingos', disciplina: 'Física'},
    {id: 6,nome: 'Amaral', disciplina: 'Química',},
    {id: 7,nome: 'Peixoto', disciplina: 'Programção'}
  ]

  profSelect(professor: any) {
    this.profSelecionado = professor.nome;
  }

  voltar() {
    this.profSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
