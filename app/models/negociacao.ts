export class Negociacao {
    /* 
       # --> atributo privado em javascript, atributo antigo.
       private --> atributo privado em TS. 
       O _ foi mantido, pois o nome do get não pode ser igual ao do atributo
    */
    constructor(
        private  _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    // get --> somente faz a leitura e retorna os atributos privados
    get data(): Date {
        const data = new Date(this._data.getTime()); // é uma nova referencia da data, para que não altere o _data 
        return this._data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string) {
        // tem que converter os elementos do DOM, pois ao pegar os dados vem no formato de string

        const exp = /-/g; // expressão regular --> pega todos os hifens que encontrar (o g indica que pega todos, é global)
        const date = new Date(dataString.replace(exp, ',')); // cria um objeto date que recebe o valor do input do forms e pega todos os hifens (exp) e substitui por virgula

        // converte para inteiro
        const quantidade = parseInt(quantidadeString);
        const valor = parseInt(valorString);

        // Retorna a class Negociacao
        return new Negociacao(date, quantidade, valor);
    }
}