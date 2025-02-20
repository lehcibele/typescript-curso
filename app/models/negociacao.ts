export class Negociacao {
    /* 
       # --> atributo privado em javascript, atributo antigo.
       private --> atributo privado em TS. 
       O _ foi mantido, pois o nome do get não pode ser igual ao do atributo
    */
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // get --> somente faz a leitura e retorna os atributos privados
    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}