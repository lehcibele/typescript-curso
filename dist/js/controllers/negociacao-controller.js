export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    // método adiciona
    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }
}
