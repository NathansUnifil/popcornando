import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brinquedo',
  templateUrl: './brinquedo.page.html',
  styleUrls: ['./brinquedo.page.scss'],
})
export class BrinquedoPage implements OnInit {

  constructor(private http:HttpClient) {
    this.mostrarLista();
    this.getLista();
   }

  private delaLista;

  public getLista() {
    return this.delaLista;
  }

   mostrarLista() { // pegar a database ofertas e os diagrams que queremos colocar
    this.delaLista=[];
    this.http.get<any[]>("http://localhost/api/recomendacoes/brinquedosConsulta.php").subscribe ( dadosBrin => { dadosBrin.forEach( item => {
      this.delaLista.push([item.TipAnun,item.NomeAnun])
    })
  })

  }

  ngOnInit() {
    this.mostrarLista;
  }

}
