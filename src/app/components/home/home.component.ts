import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  categoriaSelecionada(categoria: Categoria){
    console.log(categoria);
  }

  ngOnInit(): void {
  }

}
