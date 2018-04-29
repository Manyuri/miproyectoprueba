import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
    createDb() {

        const contactos = [

            {id: 1, nombre: 'Juan', apellido:'Perez', empresa: 'alcaldia', telefono:'3017556523', correo:'juanperez@gmail.com'},
            {id: 2, nombre: 'Maria', apellido:'Lopez', empresa: 'unimayor', telefono:'3012564859', correo:'marialopez@gmail.com'},
            {id: 3, nombre: 'Sebastian', apellido:'Vidal', empresa: 'eteknik', telefono:'3026958745', correo:'sebastianvidal@gmail.com'},
            {id: 4, nombre: 'David', apellido:'Cortez', empresa: 'alcaldia', telefono:'3113265489', correo:'daviscortez@gmail.com'},
            {id: 5, nombre: 'Alejandro', apellido:'Ortiz', empresa: 'alcaldia', telefono:'3145689525', correo:'alejandroortiz@gmail.com'}
        ];
        return {contactos};

        
    }
}