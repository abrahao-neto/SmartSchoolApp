import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public professorForm: FormGroup;
  titulo = 'Professores';

  public profSelecionado: Professor;

  public professores = [
    {id: 1,nome: 'Arlindo', disciplina: 'Matemática'},
    {id: 2,nome: 'Osvaldo', disciplina: 'Português'},
    {id: 3,nome: 'Getulio', disciplina: 'História'},
    {id: 4,nome: 'Santos', disciplina: 'Inglês'},
    {id: 5,nome: 'Domingos', disciplina: 'Física'},
    {id: 6,nome: 'Amaral', disciplina: 'Química',},
    {id: 7,nome: 'Peixoto', disciplina: 'Programção'}
  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit() {
  }

  criarForm() {
    this.professorForm = this.fb.group({
     nome: ['', Validators.required],
     disciplina: ['', Validators.required],
    });
 }

 professorSubmit() {
  console.log(this.professorForm.value);
}

  profSelect(professor: Professor) {
    this.profSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.profSelecionado = null;
  }

 

}
