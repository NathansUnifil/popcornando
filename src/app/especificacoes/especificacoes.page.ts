import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { ServicosService } from './servicos.service';

@Component({
  selector: 'app-especificacoes',
  templateUrl: './especificacoes.page.html',
  styleUrls: ['./especificacoes.page.scss'],
})
export class EspecificacoesPage implements OnInit {

  ServicosService:ServicosService

 constructor(private http:HttpClient, private storage: Storage) {
    this.pegarLista(); 
    this.getLista();
    this.ServicosService = new ServicosService(storage);
   }

  public getLista() {
   this.ServicosService.pegaLista; 
  }

  pegarLista() { // pegar a database para adicionar as variaveis das colunas
    this.ServicosService.aLista=[];
    this.http.get<any[]>("http://localhost/api/especificacoes/consultaEsp.php").subscribe 
    ( dados => { dados.forEach( item => {
      this.ServicosService.aLista.push([item.categoria, item.marca, item.anunciante])
      console.log(item.categoria, item.marca, item.anunciante) 
    })
  })
  }
  
  ngOnInit() {
    this.pegarLista;
  }

   atualizarListaAtual() {
    this.ServicosService.atualizarListaAtual;
   }

    add(add) {
      this.ServicosService.add(add)
    }
}

