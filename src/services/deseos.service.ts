import {Injectable} from '@angular/core'
import { Lista } from '../models';


@Injectable()
export class DeseosService{

    listas:Lista[]=[];

    constructor(){

        const lista1 = new Lista('Tareas pendientes para empezar proyecto');
        const lista2 = new Lista('Tareas pendientes para desarrollar proyecto');

        this.listas.push(lista1,lista2);
        console.log(this.listas)

    }

}