import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ContactoService} from '../../app/contacto.service';
import { Contacto} from '../../app/contacto';
import { ContactosPage } from '../contactos/contactos';

@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html'
})
export class EditarPage {
  contactos: Contacto[];
  contacto;Contacto;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private contactoService: ContactoService) {
  // recuperamos los valores y guardamos
      this.contacto = this.navParams.get('contacto');
      this.cargarContacto(this.contacto);

  }

  cargarContacto(id){
    this.contacto.getContactos(id)
        .subscribe(
          rs => this.contacto = rs [0],
          er => console.log(er),
          () => console.log('ok')
        )
  }

  onGuardar(){
    this.contacto.putContactos(this.contacto)
         .subscribe(
           rs => console.log("actualizado"),
           er => console.log(er,
          () => console.log("terminado"))

         )
  }
  onCancelar(){
  this.navCtrl.popToRoot();
  
    
  }

}
