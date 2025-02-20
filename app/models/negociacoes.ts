import { Negociacao } from "./negociacao.js";

// Essa classe vai guardar uma lista de negociacoes privada
export class Negociacoes {
    private negociacoes: Negociacao[] = []; // Array<Negociacao> == Negociacao[] a mesma declaração

    adiciona(negociacao: Negociacao) {
        // adiciona a negociacoes no arra negociacao
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes; // Pega cada item dessa lista e coloca em uma nova lista, faz isso para que não apague os dados das negociacoes
    }

}