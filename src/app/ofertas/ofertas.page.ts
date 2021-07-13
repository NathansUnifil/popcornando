import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  constructor(private http:HttpClient) {
    this.mostrarLista(); 
    this.getLista();
   }

  private minhalista;

  public getLista() {
    return this.minhalista;
  }

 mostrarLista() { // pegar a database ofertas e os diagrams que queremos colocar
    this.minhalista=[];
    this.http.get<any[]>("http://localhost/api/ofertas/ConsultaNumOfertas.php").subscribe 
    ( dados => { dados.forEach( item => {
      this.minhalista.push([item.NumAnun, item.NomeAnun, item.PreAnun]) 
      console.log(item.NumAnun)
    })
  })

  }

  ngOnInit() {
    this.mostrarLista;
  }

}
