import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';

@Component({
  selector: 'app-lista-de-produtos',
  templateUrl: './lista-de-produtos.component.html',
  styleUrls: ['./lista-de-produtos.component.css']
})
export class ListaDeProdutosComponent implements OnInit {

  constructor() { }

  categoriaSelecionada(categoria: Categoria){
    console.log(categoria);
  }

  filtrar(){
    
  }

  ngOnInit(): void {
  }

}
