export class Negociacao {
    /*
       # --> atributo privado em javascript, atributo antigo.
       private --> atributo privado em TS.
       O _ foi mantido, pois o nome do get não pode ser igual ao do atributo
    */
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    // get --> somente faz a leitura e retorna os atributos privados
    get data() {
        const data = new Date(this._data.getTime()); // é uma nova referencia da data, para que não altere o _data 
        return this._data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
