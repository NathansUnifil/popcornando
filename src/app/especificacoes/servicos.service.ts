import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  public aLista;

  pegaLista() {
    return this.aLista
  }

  constructor(private storage: Storage) {
    this.atualizarListaAtual();
   }

   atualizarListaAtual() {
    this.aLista=[];
    this.storage.forEach((valor, key) => {
      this.aLista.push([valor, key]);
    });
  }

  async add(add) {
    var aux=0;
    this.aLista.forEach(atua => { if (parseInt(atua[0],0) > aux) 
      aux=parseInt(atua[0],0);
    });
    aux=aux+1;
    await this.storage.set(aux.toString(),add);
    await this.atualizarListaAtual();

}
}
