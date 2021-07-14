import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-negocio',
  templateUrl: './negocio.page.html',
  styleUrls: ['./negocio.page.scss'],
})
export class NegocioPage implements OnInit {

  constructor(private http:HttpClient) { 
    this.mostrarLista();
    this.getLista();
  }
  
  private nossaLista;

  public getLista() {
    return this.nossaLista;
  }

  mostrarLista() { // pegar a database recomedações e os diagramas especificos que queremos colocar 
    this.nossaLista=[];
    this.http.get<any[]>("http://localhost/api/recomendacoes/negocioConsulta.php").subscribe ( dadosNeg => { dadosNeg.forEach( item => {
      this.nossaLista.push([item.TipAnun,item.NomeAnun])
    })
  })

  }

  ngOnInit() {
    this.mostrarLista;
  }

}
