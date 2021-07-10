import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.page.html',
  styleUrls: ['./negocio.page.scss'],
})
export class NegocioPage implements OnInit {

  constructor(private http:HttpClient) { }
  
  private nossaLista;

  public getLista() {
    return this.nossaLista;
  }

  mostrarLista() { // pegar a database ofertas e os diagrams que queremos colocar
    this.nossaLista=[];
    this.http.get<any[]>("http://localhost/api/recomendacoes/negocioConsulta.php").subscribe ( dadosNeg => { dadosNeg.forEach( item => {
      this.nossaLista([item.TipAnun,item.NomeAnun])
    })
  })

  }

  ngOnInit() {
  }

}
