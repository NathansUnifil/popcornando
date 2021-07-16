import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-especificacoes',
  templateUrl: './especificacoes.page.html',
  styleUrls: ['./especificacoes.page.scss'],
})
export class EspecificacoesPage implements OnInit {

  private aLista;
  categoria = "";
  marca = "";
  anunciante = "";

 constructor(private http:HttpClient) {
    this.pegarLista(); 
    this.getLista();
   }

  pegarLista() { // pegar a database para adicionar as variaveis das colunas
    this.aLista=[];
    this.http.get<any[]>("http://localhost/api/especificacoes/consultaEsp.php").subscribe 
    ( dados => { dados.forEach( item => {
      this.aLista.push([item.categoria, item.marca, item.anunciante])
       console.log(item.categoria, item.marca, item.anunciante)
    });
  })
  }
   
  getLista() {
    return this.aLista;
  }
  
  ngOnInit() {
    this.pegarLista;
  }

   add() {
    this.http.get<any[]>("http://localhost/api/especificacoes/registrarEsp.php?cat=" + this.categoria + "&marca=" + this.marca + "&anun=" + this.anunciante)
    .subscribe();   
  }
}

