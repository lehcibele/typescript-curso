import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
/*
    controller --> é uma instancia, vai ser uma classe, vamos criar uma instancia dessa classe, sendo que ela que vai controlar a interação do form (index.html).
    O controller vai ser a ponte entre as interações do usuario na página e a criação de modelos.
*/
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.SABADO = 6;
        this.DOMINGO = 0;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    // método adiciona
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    ehDiaUtil(data) {
        return data.getDay() > this.DOMINGO && data.getDay() < this.SABADO;
    }
    criaNegociacao() {
        // tem que converter os elementos do DOM, pois ao pegar os dados vem no formato de string
        const exp = /-/g; // expressão regular --> pega todos os hifens que encontrar (o g indica que pega todos, é global)
        const date = new Date(this.inputData.value.replace(exp, ',')); // cria um objeto date que recebe o valor do input do forms e pega todos os hifens (exp) e substitui por virgula
        // converte para inteiro
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);
        // Retorna a class Negociacao
        return new Negociacao(date, quantidade, valor);
    }
    // método para limpar os inputs do formulario, após enviar
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
