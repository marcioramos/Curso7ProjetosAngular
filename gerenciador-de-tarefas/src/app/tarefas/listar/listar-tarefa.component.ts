import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared/';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  /*remove($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm(`Deseja remover a tarefa"${tarefa.nome}`))
  }*/



}