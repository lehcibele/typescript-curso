import { Negociacao } from "../models/negociacao.js";

/*
    controller --> é uma instancia, vai ser uma classe, vamos criar uma instancia dessa classe, sendo que ela que vai controlar a interação do form (index.html).
    O controller vai ser a ponte entre as interações do usuario na página e a criação de modelos.
*/
export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    // método adiciona
    adiciona(): void {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
    }

    criaNegociacao(): Negociacao {
        // tem que converter os elementos do DOM, pois ao pegar os dados vem no formato de string

        const exp = /-/g; // expressão regular --> pega todos os hifens que encontrar (o g indica que pega todos, é global)
        const date = new Date(this.inputData.value.replace(exp, ',')); // cria um objeto date que recebe o valor do input do forms e pega todos os hifens (exp) e substitui por virgula

        // converte para inteiro
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);

        // Retorna a class Negociacao
        return new Negociacao(date, quantidade, valor);
    }
}