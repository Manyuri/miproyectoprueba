import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

// importamos servicio de datos
import {ContactoService} from '../../app/contacto.service';
import { Contacto} from '../../app/contacto';

@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
  providers:[ContactoService]
})
export class ContactosPage {
  contactos: Contacto[];
  contacto;Contacto;
 /* nombres = ['Todos', 'Juan', 'Sebastian'];*/


  constructor(public navCtrl: NavController,public alertCtrl:AlertController,  private ContactoService: ContactoService) {

  }
// al entrar en la vista ejecutamos el meodo get contactos
ionViewDidEnter(){
  this.getContactos();
}
// retorna la lista de contactos desde el servicio de datos
getContactos(): void {

  this.ContactoService.getContactos().then(contactos => this.contactos = contactos);
}
//metodo para eliminar contaco
borrar (contacto:Contacto): void{
  let confirm = this.alertCtrl.create({
    title: 'Borrar?',
    message:'Esta seguro que desea borrar este contacto?',
    buttons:[
      {
        text:'si',
        handler:()=> {
          this.ContactoService
          .borrar(contacto.id)
          .then(()=>{
             this.contactos = this.contactos.filter(h=> h !== contacto);
             if (this.contacto === contacto) {this.contacto = null;}

          });
        }
      },
    {
      text:'no',
      handler:() =>{
        //console.log('agree cliked');
      }
    }
  ]
});
confirm.present();
  }

  
/*
  // uso del parametro navCtrl para editar
  onEditar(){
    this.navCtrl.push(ContactosPage, {
      id: this.Contacto
    });
  }

  onSelect(event){
    let query = null;
    if(event.value == "Todos")
    query = this.ContactoService.getContactos();
    else
      query = this.ContactoService.getContactosFiltro(event.value);

      query.subscribe( contactos => {
        this.contactos = contactos
      })
  }*/

}