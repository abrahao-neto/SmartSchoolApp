import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado: string = '';

  public alunos = [
    {id: 1, nome: 'Marta', sobrenome: 'Laila', telefone: 34443265 },
    {id: 2, nome: 'Paula', sobrenome: 'Fernanda', telefone: 34443265 },
    {id: 3, nome: 'Laura', sobrenome: 'Monteiro', telefone: 34443265 },
    {id: 4, nome: 'Luiza', sobrenome: 'Emanuela', telefone: 34443265 },
    {id: 5, nome: 'Lucas', sobrenome: 'Zetaneli', telefone: 34443265 },
    {id: 6, nome: 'Pedro', sobrenome: 'Cabral', telefone: 34443265 },
    {id: 7, nome: 'Paulo', sobrenome: 'Souza', telefone: 34443265 }
  ]

  alunoSelect(aluno: any) {
    this.alunoSelecionado = aluno.nome;
  }

  voltar() {
    this.alunoSelecionado = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
