import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  constructor(private http:HttpClient) {  }

  private minhalista;

  public getLista() {
    return this.minhalista
  }

  mostrarLista() { // pegar a database ofertas e os diagrams que queremos colocar
    this.minhalista=[];
    this.http.get<any[]>("http://localhost/api/ConsultaOfertas.php").subscribe ( dados => { dados.forEach( item => {
      this.minhalista([item.NumAnun,item.NomeAnun,item.PreAnun])
    })
  })

  }

  ngOnInit() {
  }

}
