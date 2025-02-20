export class Negociacao {
    /* 
       # --> atributo privado em javascript, atributo antigo.
       private --> atributo privado em TS. 
       O _ foi mantido, pois o nome do get não pode ser igual ao do atributo
    */
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // get --> somente faz a leitura e retorna os atributos privados
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}

/*
    controller --> é uma instancia, vai ser uma classe, vamos criar uma instancia dessa classe, sendo que ela que vai controlar a interação do form (index.html).
    O controller vai ser a ponte entre as interações do usuario na página e a criação de modelos.
*/