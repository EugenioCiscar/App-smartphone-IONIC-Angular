import { ListaItem } from "./lista-item.model";




export class Lista{

    id: number;
    titulo:string;
    creadeEn: Date;
    terminadaEn:Date;
    terminada:boolean;
    items: ListaItem[];

    constructor(titulo:string){
        this.titulo=titulo;
        this.terminada=false;
        this.creadeEn=new Date();
        this.items = [];

        this.id=new Date().getTime();
    }
}