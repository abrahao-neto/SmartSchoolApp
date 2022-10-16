import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef?: BsModalRef;
  public alunoForm: FormGroup;
  titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  

  public alunos = [
    {id: 1, nome: 'Marta', sobrenome: 'Laila', telefone: 34443265 },
    {id: 2, nome: 'Paula', sobrenome: 'Fernanda', telefone: 34443265 },
    {id: 3, nome: 'Laura', sobrenome: 'Monteiro', telefone: 34443265 },
    {id: 4, nome: 'Luiza', sobrenome: 'Emanuela', telefone: 34443265 },
    {id: 5, nome: 'Lucas', sobrenome: 'Zetaneli', telefone: 34443265 },
    {id: 6, nome: 'Pedro', sobrenome: 'Cabral', telefone: 34443265 },
    {id: 7, nome: 'Paulo', sobrenome: 'Souza', telefone: 34443265 }
  ];
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm() {
     this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
     });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

}
