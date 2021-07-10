import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.page.html',
  styleUrls: ['./livro.page.scss'],
})
export class LivroPage implements OnInit {

  constructor(private http:HttpClient) { }

  private aquelaLista;

  public getLista() {
    return this.aquelaLista;
  }

   mostrarLista() { // pegar a database ofertas e os diagrams que queremos colocar
    this.aquelaLista=[];
    this.http.get<any[]>("http://localhost/api/recomendacoes/livrosConsulta.php").subscribe ( dadosLiv => { dadosLiv.forEach( item => {
      this.aquelaLista([item.TipAnun,item.NomeAnun])
    })
  })

  }

  ngOnInit() {
  }

}
