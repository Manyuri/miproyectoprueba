import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';



import 'rxjs/add/operator/toPromise';
// importamos la clase con el tipo de datos consultados al servidor
 
import { Contacto} from './contacto';

@Injectable()
export class ContactoService{

    private contactosUrl = 'api/contacto'; //url to web api
    constructor (private http: Http){}
    
  
 

    

//creamos el metdo getContactos para consultar al servidor la lista de  contactos
getContactos (): Promise<Contacto[] > {

  return this.http.get(this.contactosUrl)
     .toPromise()
     .then(Response => Response.json() as Contacto[])
     .catch(this.handleError);

} 
private handleError(error:any): Promise <any>{
console.error('An error ocurred, error'); // or demo purposed only
return Promise.reject(error.message || error);
}
private headers= new Headers({'content-type':'aplication/json'});

borrar (id:number): Promise<void>{
  const url = '${his.contacosUrl}/${id}';
  return this.http.delete(url,{headers: this.headers})
      .toPromise()
      .then(() => null)
    .catch(this.handleError);
}

crearNuevo(nombre: string, apellido: string, empresa:string, telefono: string, correo: string):
Promise<Contacto> {
        return this.http
         .post (this.contactosUrl, JSON.stringify({nombre: nombre, apellido: apellido, empresa: empresa, 
        correo: correo}), {headers: this.headers})
         .toPromise()
         .then(res => res.json().data as Contacto)
         .catch(this.handleError);
    }

/*getContactosFiltro(filtro: string){
        this.contactosUrl = this.contactosUrl.list('/contactos', {
            query: {
            orderByChild: 'nombre',
               equalTo: filtro
            }
        }) as FirebaseListObservable<any[]>;
        return this.contactosUrl;
    } */
}

