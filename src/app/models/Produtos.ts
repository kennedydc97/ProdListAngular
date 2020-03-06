export class Produto{
    constructor(public cod:number, 
                public titulo: string,
                public desc: string, 
                public precoCheio: number,
                public precoDesconto: boolean){}
}